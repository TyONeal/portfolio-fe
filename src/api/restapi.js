async function restapi() {
    const apiCall = fetch("/projects", {
    method: 'GET',
        headers: {
            // eslint-disable-next-line no-undef
        Authorization: PASSKEY_REST
        }
    })

}