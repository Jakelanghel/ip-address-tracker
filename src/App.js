import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styled/Global";
import Tracker from "./components/Tracker";
import Output from "./components/Output";
import Map from "./components/Map";

// valid ips
// 115.42.150.37
// 192.168.0.1
// 110.234.52.124
// 192.212.174.101

const theme = {
    layout: {
        desktop: "600px",
    },

    colors: {
        veryDarkGray: "hsl(0, 0%, 17%)",
        darkGray: "hsl(0, 0%, 59%)",
        white: "hsl(180, 0.39%, 99.8%)",
        errorRed: "#A72608",
    },
};

function App() {
    const [appData, setAppData] = React.useState({
        fetched: false,
        data: {},
        cords: [51.505, -0.09],
        ip: "",
        error: false,
    });

    useEffect(() => {
        try {
            fetch("https://api.ipify.org?format=json")
                .then((res) => res.json())
                .then((data) => {
                    setAppData((oldData) => ({ ...oldData, ip: data.ip }));
                });
        } catch {
            console.log("Error");
        }
    }, []);

    const [url, setUrl] = React.useState(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${appData.ip}`
    );

    useEffect(() => {
        try {
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    const cords = getCords(data);
                    setAppData((oldData) => ({
                        ...oldData,
                        fetched: true,
                        data: data,
                        cords: cords,
                        ip: oldData.ip,
                        error: false,
                    }));
                });
        } catch {
            setAppData((oldData) => ({ ...oldData, error: true }));
        }
    }, [url]);

    const getCords = (data) => {
        const cords = [];
        cords.push(data.location.lat);
        cords.push(data.location.lng);
        return cords;
    };

    const handleClick = () => {
        const isValidIp = checkInput(appData.ip);
        isValidIp ? updateUrl() : showError();
    };

    const checkInput = (ip) => {
        const regexExp =
            /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
        const isValidIp = regexExp.test(ip);
        return isValidIp;
    };

    const updateUrl = () => {
        setUrl(
            `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${appData.ip}`
        );
    };

    const showError = () => {
        setAppData((oldData) => ({
            ...oldData,
            error: true,
            ip: "Invalid Ip Address",
        }));
    };

    const getUsrInput = (e) => {
        let ip = e.target.value;
        setAppData((oldData) => ({ ...oldData, ip: ip }));
    };

    const clearInput = () => {
        setAppData((oldState) => ({ ...oldState, ip: "" }));
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <main>
                    <Tracker
                        onChange={getUsrInput}
                        usrData={appData}
                        handleClick={handleClick}
                        clearInput={clearInput}
                    />
                    <Map cords={appData.cords} center={appData.cords} />
                    {appData.fetched && !appData.error && (
                        <Output data={appData.data} />
                    )}
                </main>
            </ThemeProvider>
        </>
    );
}

export default App;
