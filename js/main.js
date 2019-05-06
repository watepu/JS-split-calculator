'use strict';

{
  const price = document.getElementById('price');
  const num = document.getElementById('num');
  const unit = document.getElementById('unit');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const reset = document.getElementById('reset');

  function checkInput(){
    if(
      price.value.match(/^[1-9][0-9]*$/) !== null &&
      num.value.match(/^[1-9][0-9]*$/) !== null
      // 正規表現を使って一桁目は1-9、2桁目以降は0-9のどれかが入力されており、nullでなければ
    ){
      btn.classList.remove('disabled');
    }else{
      btn.classList.add('disabled');
    }
  }

  btn.addEventListener('click', function(){
    const payLess = Math.floor(price.value / num.value /unit.value) * unit.value;
    const short = price.value - (payLess * num.value);
    const payMore = Math.ceil(price.value / num.value /unit.value) * unit.value;
    const over = Math.abs(price.value - (payMore * num.value));
    let str;
    if(this.classList.contains('disabled') === true){
      // もしこのボタンにdisabledが含まれていたら・・・
      return;
    }

    if(over === 0 && short === 0){
      str = '一人' + (price.value / num.value) + '円です。';
    }else{
      str = '一人' + payLess + '円だと' + short + '円足りません。　' +
      '一人' + payMore + '円だと' + over + '円余ります。'
    }

    // payLess = Math.floor(price.value / num.value /unit.value) * unit.value;
    // short = price.value - (payLess * num.value);
    // payMore = Math.ceil(price.value / num.value /unit.value) * unit.value;
    // over = Math.abs(price.value - (payMore * num.value));
    // str =
    // '一人' + payLess + '円だと' + short + '円足りません。　' +
    // '一人' + payMore + '円だと' + over + '円余ります。'
    result.textContent = str;
  });

  price.addEventListener('keyup', checkInput)
  num.addEventListener('keyup', checkInput)

}
