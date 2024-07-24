import Toast from "react-native-toast-message";


// Messagens para tela de Login

export const ToastSucess = () => {
    Toast.show({
        type: "success",
        text1: "Personagem solicitado com sucesso!",
        autoHide: true,
        visibilityTime: 3000,
        position: 'top',
        bottomOffset: 50,
        topOffset: 100
    })
}

export const ToastInfo = () => {
    Toast.show({
        type: "info",
        text1: "Preencha os campos",
        autoHide: true,
        visibilityTime: 2500,
        position: 'top',
        bottomOffset: 50,
        topOffset: 100
    })
}

export const ToastError = () => {
    Toast.show({
        type: "error",
        text1: "E-mail ou senha inváila.",
        autoHide: true,
        visibilityTime: 2500,
        position: 'top',
        bottomOffset: 50,
        topOffset: 100
    })
}


