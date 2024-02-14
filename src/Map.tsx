import React, { useState, useEffect, useCallback } from 'react';

const Map = () => {
    const [lat, setLat] = useState<number>(0);
    const [lng, setLng] = useState<number>(0);
    const [currentPosition, setCurrentPosition] = useState<number>(0);
    const [buttonClicked, setButtonClicked] = useState<boolean>(false); // ボタンのクリック状態

    const R = Math.PI / 180;

    const distance = useCallback((lat1: number, lng1: number, lat2: number, lng2: number) => {
        lat1 *= R;
        lng1 *= R;
        lat2 *= R;
        lng2 *= R;
        return 6371 * Math.acos(Math.cos(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1) + Math.sin(lat1) * Math.sin(lat2));
    }, [R]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const latitude = pos.coords.latitude;
                const longitude = pos.coords.longitude;
                setLat(latitude);
                setLng(longitude);
            },
            (error) => {
                alert("位置情報の取得に失敗しました");
            }
        );
    }, []);

    useEffect(() => {
        if (buttonClicked) { // ボタンがクリックされた場合にのみ処理を行う
            const currentPosition = distance(lat, lng, 34.64788365132071, 135.51425891432288);
            const roundedNumber = Math.floor(currentPosition * 10) / 10; // 0.9
            setCurrentPosition(roundedNumber);
        }
    }, [lat, lng, distance, buttonClicked]);

    const handleButtonClick = () => {
        setButtonClicked(true); // ボタンがクリックされたらボタンのクリック状態を更新
    };

    return (
        <div>
            <p>あなたの現在の位置は</p>
            <p>緯度: {lat}</p>
            <p>経度: {lng}</p>
            <p>現在位置と目標位置との距離: {currentPosition}</p>
            <button onClick={handleButtonClick}>距離を計算する</button>
        </div>
    );
};

export default Map;
