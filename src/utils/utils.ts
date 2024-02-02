const syncLoadFile: (path: string) => Promise<unknown> = (path:string) => {
    return new Promise((resolve, reject) => {
        fetch(window?.location?.origin + path)
            .then(vMdEditorRead =>(vMdEditorRead as Response).text())
            .then((e) => {
                resolve(e)
            })
            .catch((s) => {
                reject(s)
            })
    })
}

export {
    syncLoadFile
}