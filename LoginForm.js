import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { Hoshi } from 'react-native-textinput-effects';


const LoginForm = () => {
    const {
        control,
        handleSubmit,
        getValues,
        setValue,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // Handle form submission here (e.g., make API call, perform authentication, etc.)
        console.log(data);
    };

    return (
        <View style={styles.formContainer}>

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={{backgroundColor:"#fff"}}>
                    <FloatingLabelInput
                        label="Username"
                        editable={true}
                        // onFocus={() => { alert("l") }}
                        value={value}
                        onChangeText={(text) =>
                            setValue('username', text)
                        }
                    />
                    </View>
                )}
                name="username"
                rules={{ required: 'Username is required' }}
                defaultValue=""
            />
            {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>}

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={{backgroundColor:"#fff"}}>

                    <Hoshi
                        label={'Username 2'}
                        editable={true}
                        onChangeText={(text) =>
                            setValue('username2', text)
                        }
                        borderColor={'#b76c94'}
                        borderHeight={3}
                        inputPadding={16}
                        value={value}
                    />
                    </View>
                )}
                name="username2"
                rules={{ required: 'Username 2 is required' }}
                defaultValue=""
            />
            {errors.password && <Text style={styles.errorText}>{errors.username2.message}</Text>}

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={{backgroundColor:"#fff"}}>

                    <TextInput
                        style={styles.input}
                        editable={true}
                        placeholder="Password"
                        onChangeText={(text) =>
                            setValue('password', text)
                        }
                        // onBlur={onBlur}
                        value={value}
                        secureTextEntry
                    />
                    </View>
                )}
                name="password"
                rules={{ required: 'Password is required' }}
                defaultValue=""
            />
            {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        width: '100%',
        // paddingHorizontal: 20,
    },
    input: {
        height: 40,
        marginTop: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    submitButton: {
        backgroundColor: 'blue',
        paddingVertical: 12,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default LoginForm;

// import React, { useState } from 'react';
// import { ScrollView } from 'react-native';
// import { FloatingLabelInput } from 'react-native-floating-label-input';

// const app = () => {
//   const [birthday, setBirthday] = useState('');
//   const [phone, setPhone] = useState('');
//   const [price, setPrice] = useState('');

//   return (
//    <>
    //   <FloatingLabelInput
    //     label="Birthday"
    //     value={birthday}
    //     mask="99/99/9999"
    //     keyboardType="numeric"
    //     onChangeText={value => setBirthday(value)}
    //   />
//       <FloatingLabelInput
//         label="Phone"
//         value={phone}
//         mask="(99)99999-9999"
//         keyboardType="numeric"
//         onChangeText={value => setPhone(value)}
//       />
//       <FloatingLabelInput
//         label="Price"
//         value={price}
//         maskType="currency"
//         currencyDivider="." // which generates: 9.999.999,99 or 0,99 ...
//         keyboardType="numeric"
//         onChangeText={value => setPrice(value)}
//       />
//       </>
//   );
// };
// export default app;