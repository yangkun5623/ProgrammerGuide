import { ref} from "vue";
const  useLoadFile = async (path:string) => {
    const previewData = ref('')
    await fetch(window?.location?.origin + path)
        .then(vMdEditorRead =>(vMdEditorRead as Response).text())
        .then((e) => {
            previewData.value = e
        })
    return previewData
}

export {
    useLoadFile
}