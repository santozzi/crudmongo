export const isGoodPassword = (value:any) => {
    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}/;
    console.log(regex.test(value));
    
    return regex.test(value);
  };