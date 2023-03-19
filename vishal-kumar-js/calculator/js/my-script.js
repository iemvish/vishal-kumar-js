function del(){
    let val = document.calculator.input.value.slice(0, -1);
    document.calculator.input.value = val;
}
