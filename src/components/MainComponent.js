import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
    addDataRequest,
    deleteDataRequest,
    editDataRequest,
} from "../actions/DataActions";

const MainComponent = () => {
    const data = useSelector((state) => state.data);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");
    const [editId, setEditId] = useState(null);

    const handleAdd = () => {
        if (inputValue.trim()) {
            dispatch(addDataRequest({ id: Date.now(), name: inputValue.trim() }));
            setInputValue("");
        }
    };

    const handleEditSubmit = () => {
        if (inputValue.trim()) {
            dispatch(editDataRequest(editId, { id: editId, name: inputValue.trim() }));
            setInputValue("");
            setEditId(null);
        }
    };

    const handleEdit = (id, name) => {
        setInputValue(name);
        setEditId(id);
    };

    const handleDelete = (id) => {
        dispatch(deleteDataRequest(id));
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={inputValue}
                onChangeText={setInputValue}
                placeholder="Masukkan data..."
            />
            {editId === null ? (
                <TouchableOpacity style={styles.button} onPress={handleAdd}>
                    <Text style={styles.buttonText}>Tambah Data</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.button} onPress={handleEditSubmit}>
                    <Text style={styles.buttonText}>Simpan Edit</Text>
                </TouchableOpacity>
            )}
            {data.map((item) => (
                <View key={item.id} style={styles.itemContainer}>
                    <Text style={styles.itemText}>{item.name}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => handleEdit(item.id, item.name)}>
                        <Text style={styles.buttonText}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handleDelete(item.id)}>
                        <Text style={styles.buttonText}>Hapus</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        padding: 8,
        marginBottom: 8,
    },
    button: {
        backgroundColor: "blue",
        padding: 8,
        borderRadius: 4,
        marginBottom: 8,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    itemText: {
        flex: 1,
        fontSize: 18,
        marginRight: 8,
    },
});

export default MainComponent;
