let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">U-tube Differential Manometer</h4>
            <br>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    internal_calculation1();
}
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Activity 1', 'act1-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' id='act1-div'>
      <h3>Activity 1</h3>
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
         Pipe A contains fluid of specific gravity 0.7
      </p>
      <p >
         Pipe B contains fluid of specific gravity 0.8
      </p>
      <p >
         Manometeric fluid is mercury of specific gravity 13.6 
      </p>
      <p >
         Find pressure difference between two pipes. 
      </p>
      <p>
         $$
            P_A - P_B = hg\\left(\ρ_m - \ρ_1\\right) + \ρ_2gy - \ρ_1gx
         $$
      </p>
      <div id="act1-press-diff-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               <span style="display:inline-block">
                  $$ P_A - P_B $$ 
               </span> = 
            </div>
            <div class="row justify-content-center col-md-4" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act1-press-diff-inp' class='form-control fs-16px' /> <span style="display:contents;">N/m<sup>2</sup></span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_pressure_difference_act1();'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
}
function internal_calculation1() {
    h = 0;
    x = 0;
    y = 0;
    press_diff_a1 = 0;
    h = random1(10, 13);
    x = random1(10, 13);
    y = random1(15, 21);
    console.log(h, x, y);
    press_diff_a1 =
        (h / 100) * g * (pm * 1000 - pa * 1000) +
            (pb * 1000 * g * y) / 100 -
            (pa * 1000 * g * x) / 100;
}
function verify_pressure_difference_act1() {
    let inp = (document.getElementById('act1-press-diff-inp'));
    console.log(press_diff_a1);
    if (!verify_values(parseFloat(inp.value), press_diff_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect pressure difference value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-press-diff-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         <span style="display:inline-block">
            $$ P_A - P_B $$
         </span> = ${parseFloat(press_diff_a1.toFixed(4))} N/m<sup>2</sup>
      </p>
      
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act1-btn1" onclick='activity2();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
activity1();
//# sourceMappingURL=activity1.js.map