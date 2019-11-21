async function searchDelay(delay) {
    try {
        const response = await fetch(
            "https://delay-server.aldrinpvincent.now.sh/?time=" + delay
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("error", error);
    }
}

export default searchDelay;
