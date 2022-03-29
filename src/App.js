import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styled/Global";
import Tracker from "./components/Tracker";
import Output from "./components/Output";
import Map from "./components/Map";

console.log(process.env.REACT_APP_API_KEY);
// valid ips
// 115.42.150.37
// 192.168.0.1
// 110.234.52.124

// 192.212.174.101

const theme = {
    colors: {
        veryDarkGray: "hsl(0, 0%, 17%)",
        darkGray: "hsl(0, 0%, 59%)",
        white: "hsl(180, 0.39%, 99.8%)",
        errorRed: "#A72608",
    },
};

function App() {
    const [usrData, setUsrData] = React.useState({
        ip: "",
        error: false,
    });

    const [fetchedData, setFetchedData] = React.useState({
        fetched: false,
        data: {},
        cords: [51.505, -0.09],
    });

    const [url, setUrl] = React.useState(``);

    useEffect(() => {
        try {
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    const cords = getCords(data);
                    setFetchedData((oldData) => ({
                        ...oldData,
                        fetched: true,
                        data: data,
                        cords: cords,
                    }));
                });
        } catch {
            setUsrData((oldData) => ({ ...oldData, error: true }));
        }
    }, [url]);

    const getCords = (data) => {
        const cords = [];
        cords.push(data.location.lat);
        cords.push(data.location.lng);
        return cords;
    };

    const handleClick = () => {
        checkInput(usrData.ip);
        console.log(usrData);
    };

    const checkInput = (ip) => {
        const regexExp =
            /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
        const isValidIp = regexExp.test(ip);
        isValidIp ? updateUrl() : showError();
    };

    const updateUrl = () => {
        setUrl(
            `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${usrData.ip}`
        );
    };

    const showError = () => {
        setUsrData((oldData) => ({ ...oldData, error: true }));
    };

    const getUsrInput = (e) => {
        let ip = e.target.value;
        setUsrData((oldData) => ({ ...oldData, ip: ip }));
    };

    console.log(fetchedData);
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <main>
                    <Tracker
                        onChange={getUsrInput}
                        usrData={usrData}
                        handleClick={handleClick}
                    />
                    <Map cords={fetchedData.cords} />
                </main>
                {fetchedData.fetched && !usrData.error && (
                    <Output data={fetchedData.data} />
                )}
            </ThemeProvider>
        </>
    );
}

export default App;
