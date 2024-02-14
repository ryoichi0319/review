

    // function tomato(price, ) {
    //     const name = "トマト";
       
    //       printPrice(name, price);
    //   }
      
    //   const printPrice = (name, price) => {
    //     console.log(name + 'の値段は' + price);
    //   };
      
    //   tomato(100);

    // function tomato(price, callback) {
    //     const name = "トマト";
    //     callback(name, price);
    //   }
      
    //   const printPrice = (name, price) => {
    //     console.log(name + 'の値段は' + price);
    //   };
      
      
      // tomato(100, printPrice);
  import { useState, useEffect } from "react";

const Callback = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isSale, setIsSale] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      let d = new Date();
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate();
      let dayofweek = d.getDay();
      const dayname = ['日', '月', '火', '水', '木', '金', '土'];
      setDate(year + '年' + month + '月' + day + '日' + '[' + dayname[dayofweek] + ']');
      let hour = d.getHours().toString().padStart(2, '0');
      let minute = d.getMinutes().toString().padStart(2, '0');
      setTime(hour + ':' + minute);
    };
    // 初回の呼び出しのみ
    updateTime();
    // cleanup 関数を返すことで、コンポーネントがアンマウントされるときにインターバルをクリアする
    const intervalId = setInterval(updateTime, 60000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const goal = new Date(2024, 1, 14, 14, 27, 0);
    const currentTime = new Date();
    if (currentTime > goal) {
      setIsSale(true);
    }
  }, []);

  const printPrice = (name, price) => {
    console.log(name + 'の値段は' + price + '円です', "print");
  };

  const logPrice = (name, price) => {
    console.log(name + 'の値段は' + price + '円です。', "log");
  };

  const tomato = (price, ) => {
    const name = "トマト";
    if (isSale) {
      printPrice(name, price * 0.8); // セール価格を表示
      
    } else {
      logPrice(name, price); // 通常価格を表示
    }
  };

  // 通常価格を表示
  tomato(100);



  
  return (
    <div>
      <p>{date}</p>
      <p>{time}</p>
    </div>
  );
};

export default Callback;

    