function activity2() {
    let btn = (document.getElementById('act1-btn1'));
    btn && btn.remove();
    press_diff_a2 = 0;
    press_diff_a2 =
        (h / 100) * g * (pm * 1000 - 1 * 1000) +
            (1 * 1000 * g * y) / 100 -
            (1 * 1000 * g * x) / 100;
    let btn_text = get_collapse_btn_text('Activity 2', 'act2-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' id='act2-div'>
      <h3>Activity 2</h3>
      <br>
       <img src="./images/sim1.png" alt="u-tube differential manometer" style='width: 25%;' srcset="">
      <br>
      <p style='text-align: center;'>Figure 1</p>
      <br>
      <br>
      <div class='row justify-content-center'>
         <p class="col-md-3">
            h = ${h}cm
         </p>
         <p class="col-md-3">
            x = ${x}cm
         </p>
         <p class="col-md-3">
            y = ${y}cm
         </p>
      </div>
      
      <p >
         If in both pipe water is fluid.
      </p>
      <p >
         Find pressure difference between two pipes. 
      </p>
      <p>
         $$
            P_A - P_B = hg\\left(\ρ_m - \ρ_1\\right) + \ρ_2gy - \ρ_1gx
         $$
      </p>
      <div id="act2-press-diff-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               <span style="display:inline-block">
                  $$ P_A - P_B $$ 
               </span> = 
            </div>
            <div class="row justify-content-center col-md-4" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act2-press-diff-inp' class='form-control fs-16px' /> <span style="display:contents;">N/m<sup>2</sup></span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_pressure_difference_act2();'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act2-div');
    }, 150);
}
function verify_pressure_difference_act2() {
    let inp = (document.getElementById('act2-press-diff-inp'));
    console.log(press_diff_a2);
    if (!verify_values(parseFloat(inp.value), press_diff_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect pressure difference value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-press-diff-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         <span style="display:inline-block">
            $$ P_A - P_B $$
         </span> = ${parseFloat(press_diff_a2.toFixed(4))} N/m<sup>2</sup>
      </p>
      
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act2-btn1" onclick='exp_complete();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function exp_complete() {
    let btn = (document.getElementById('act2-btn1'));
    btn && btn.remove();
    alert('Experiment Completed');
}
//# sourceMappingURL=activity2.js.map