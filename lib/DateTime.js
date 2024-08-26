function DateTime() {
    const currentdate = new Date();
    const standardHour = () => {
      if (currentdate.getHours() <= 12) {
        return currentdate.getHours();
      } else {
        return currentdate.getHours() - 12;
      }
    };
    const amOrPm = () => {
      if (currentdate.getHours() < 12) {
        return 'AM';
      } else {
        return 'PM';
      }
    };
    return `${currentdate.getDate()}/${currentdate.getMonth() + 1}/${currentdate.getFullYear()} @ ${standardHour().toString().padStart(2, '0')}:${currentdate.getMinutes().toString().padStart(2, '0')}:${currentdate.getSeconds().toString().padStart(2, '0')} ${amOrPm()}`;
  };

  export {DateTime};