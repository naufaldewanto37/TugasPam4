import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { addData, deleteData, editData, fetchData } from '../actions/dataAction.js';

const DataList = () => {
    const [input, setInput] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const data = useSelector((state) => state.data.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const addItem = () => {
        if (input !== '') {
            if (editIndex === null) {
                dispatch(addData(input));
            } else {
                dispatch(editData(editIndex, input));
                setEditIndex(null);
            }
            setInput('');
        }
    };

    const removeItem = (index) => {
        dispatch(deleteData(index));
    };

    const editItem = (index) => {
        setInput(data[index]);
        setEditIndex(index);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'pink' }}>
            <View style={{ padding: 10 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 20,
                    }}>
                    <TextInput
                        value={input}
                        onChangeText={setInput}
                        placeholder="Masukkan data"
                        style={{ flex: 1, borderWidth: 1, borderColor: 'gray', padding: 5 }}
                    />
                    <TouchableOpacity onPress={addItem} style={{ marginLeft: 10 }}>
                        <Icon name="plus" size={30} color="blue" />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: 10,
                            }}>
                            <Text style={{ flex: 1 }}>{item}</Text>
                            <TouchableOpacity onPress={() => editItem(index)}>
                                <Icon name="edit" size={20} color="green" />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => removeItem(index)}
                                style={{ marginLeft: 10 }}>
                                <Icon name="trash" size={20} color="red" />
                            </TouchableOpacity>
                        </View>
                    )}
                />
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={{ padding: 10 }}>
                        {/* ... */}
                        <TouchableOpacity
                            onPress={() => dispatch(fetchData())}
                            style={{ marginBottom: 20 }}>
                            <Text style={{ color: 'blue' }}>Fetch Data</Text>
                        </TouchableOpacity>
                        {/* ... */}
                    </View>
                </SafeAreaView>
            </View>
        </SafeAreaView>
    );
};

export default DataList;
