export default function timeConverter(UNIX_timestamp){
    let a = new Date(UNIX_timestamp * 1000);
    let hour = a.getHours();
    let min = a.getMinutes();
    let onlyTime = hour + ':' + min;
    return onlyTime;
  }

