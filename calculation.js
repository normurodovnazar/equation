var dCalculation,x1Calculation,x2Calculation,equation;
var dFormula="D = {b^2} - 4 \\cdot a \\cdot c= {bb^2} - 4 \\cdot aa \\cdot cc =",x1Formula="{x_1} =\\frac{{ - b - \\sqrt {D} }}{{2 \\cdot a}}= \\frac{{ - bb - \\sqrt {DD} }}{{2 \\cdot aa}}=",
x2Formula="{x_2} = \\frac{{ - b + \\sqrt {D} }}{{2 \\cdot a}} =\\frac{{ - bb + \\sqrt {DD} }}{{2 \\cdot aa}}=",equationFormula ="\\[ a{x^2} + bx + c = 0 \\]"
var dGood;
var ekub,dCeoff,eq;
var dApplied=dFormula,dCalculated,D,x1Applied=x1Formula,x1Calculated,rootD,x2Applied=x2Formula,x2Calculated;
var x1Calculated1,x1,x1Calculated2,x2Calculated1,x2,x1Calculated2;
var underRoot,a,b,c;

window.onload = function(){
  dCalculation = document.getElementById("d");
  x1Calculation = document.getElementById("x1");
  x2Calculation = document.getElementById("x2");
  equation = document.getElementById("equation")
}

function p(){
  eq = equationFormula
  dApplied = dFormula;
  x1Applied = x1Formula;
  x2Applied = x2Formula;
  a=Number(document.getElementById("a").value),b=Number(document.getElementById("b").value),c=Number(document.getElementById("c").value);
  if(a==0 && b==0 && c==0) alert("a,b,c larni kiriting"); else
  if(a==0) alert("Kvadrat tenglamada a=0 bo'lmaydi yoki siz a ni kiritmadingiz"); else
  if(Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)){
    "\\[ a{x^2} + bx + c = 0 \\]"
    eq = eq.replace("a",Math.abs(a)==1 ? a>0 ? "" : "-" : a)
    if(c==0) eq = eq.replace("+ c","");
    if(b==0) eq = eq.replace("+ bx","");
    if(b>0) eq = eq.replace("b",b==1 ? "" : b);
    if(c>0) eq = eq.replace("c",c);
    if(b<0) if(b!=-1) eq = eq.replace("+ b",b); else eq = eq.replace("+ bx","-x")
    if(c<0) eq = eq.replace("+ c",c);
    if(a<0) {
      dApplied = dFormula.replace("aa","\\left( aa \\right)");
      x1Applied = x1Formula.replace("aa","\\left( aa \\right)");
      x2Applied = x2Formula.replace("aa","\\left( aa \\right)");
    }
    if(b<0) {
      dApplied = dApplied.replace("bb","\\left( bb \\right)");
      x1Applied = x1Applied.replace("bb","\\left( bb \\right)");
      x2Applied = x2Applied.replace("bb","\\left( bb \\right)");
    }
    if(c<0) dApplied = dApplied.replace("cc","\\left( cc \\right)");
    var k=-4*a*c;
    dCalculated = String(b*b)+(k<0 ? String(k) : "+"+String(k));
    D = b*b-4*a*c;
    x1Calculated = "\\frac{{"+String(-b)+" - \\sqrt {DD} }}{"+String(2*a)+"}=";
    x2Calculated = "\\frac{{"+String(-b)+" + \\sqrt {DD} }}{"+String(2*a)+"}=";
    if(D==0){
      x1Calculated = "\\frac{aa}{bb}=".replace("aa",-b).replace("bb",2*a)
      x1 = findDivision(-b,2*a)
    }
    if(D>0){
      dGood = isDGood(D)
      if(dGood){
        rootD = Math.sqrt(D)
        x1Calculated = x1Calculated.replace("\\sqrt {DD}",rootD)
        x2Calculated = x2Calculated.replace("\\sqrt {DD}",rootD)
        x1Calculated1 = "\\frac{aa}{bb}=".replace("aa",String(-b-rootD)).replace("bb",2*a);
        x2Calculated1 = "\\frac{aa}{bb}=".replace("aa",String(-b+rootD)).replace("bb",2*a);
        if(-b-rootD!=0) x1 = findDivision(-b-rootD,2*a); else x1 = 0
        if(-b+rootD!=0) x2 = findDivision(-b+rootD,2*a); else x2 = 0
      }else{
        dCeoff = findDCeoff(D)
        underRoot = D/(dCeoff*dCeoff)
        x1Calculated = "\\frac{{xx - yy\\sqrt {zz} }}{tt}=".replace("xx",String(-b)).replace("tt",String(2*a)).replace("zz",String(underRoot))
        x2Calculated = "\\frac{{xx + yy\\sqrt {zz} }}{tt}=".replace("xx",String(-b)).replace("tt",String(2*a)).replace("zz",String(underRoot))
        if(dCeoff!=1){
          x1Calculated = x1Calculated.replace("yy",dCeoff)
          x2Calculated = x2Calculated.replace("yy",dCeoff)
          if(b!=0){
            ekub = findEKUB(b,dCeoff,2*a);
            if(ekub!=1){
            x1Calculated1="\\frac{{aa\\left( {bb - cc\\sqrt {dd} } \\right)}}{{aa \\cdot ff}}="
            x2Calculated1="\\frac{{aa\\left( {bb + cc\\sqrt {dd} } \\right)}}{{aa \\cdot ff}}="
            x1Calculated2="\\frac{{\\cancel{aa}\\left( {bb - cc\\sqrt {dd} } \\right)}}{{\\cancel{aa} \\cdot ff}}="
            x2Calculated2="\\frac{{\\cancel{aa}\\left( {bb + cc\\sqrt {dd} } \\right)}}{{\\cancel{aa} \\cdot ff}}="
            x1Calculated1 = apply(x1Calculated1)
            x2Calculated1 = apply(x2Calculated1)
            x1Calculated2 = apply(x1Calculated2)
            x2Calculated2 = apply(x2Calculated2)
            if(2*a/ekub==1){
              x1 = "aa - bb\\sqrt {cc}".replace("aa",String(-b/ekub)).replace("bb",dCeoff/ekub==1 ? "" : dCeoff/ekub).replace("cc",underRoot); 
              x2 = "aa + bb\\sqrt {cc}".replace("aa",String(-b/ekub)).replace("bb",dCeoff/ekub==1 ? "" : dCeoff/ekub).replace("cc",underRoot); 
            }else{
              x1 = "\\frac{{aa - bb\\sqrt {cc} }}{dd}".replace("aa",-b/ekub).replace("bb",dCeoff/ekub==1 ? "" : dCeoff/ekub).replace("cc",underRoot).replace("dd",2*a/ekub)
              x2 = "\\frac{{aa + bb\\sqrt {cc} }}{dd}".replace("aa",-b/ekub).replace("bb",dCeoff/ekub==1 ? "" : dCeoff/ekub).replace("cc",underRoot).replace("dd",2*a/ekub)
            }
            }
          } else {
            x1Calculated1="\\frac{{ - yy\\sqrt {zz} }}{tt}=".replace("yy",dCeoff).replace("zz",underRoot).replace("tt",2*a)
            x2Calculated1="\\frac{{ yy\\sqrt {zz} }}{tt}=".replace("yy",dCeoff).replace("zz",underRoot).replace("tt",2*a)
            x1 = specialCase("-\\frac{{ yy\\sqrt {zz} }}{tt}")
            x2 = specialCase("\\frac{{ yy\\sqrt {zz} }}{tt}")
          }
        } else{
          x1Calculated = x1Calculated.replace("yy","").replace("=","")
          x2Calculated = x2Calculated.replace("yy","").replace("=","")
        }
      } 
    }
    MathJax.typesetPromise().then(() => {
       dCalculation.innerHTML = "\\["+dApplied.replace("aa",String(a)).replace("bb",String(b)).replace("cc",String(c))+dCalculated+"="+D+" \\]";
       equation.innerHTML = eq;
        if(D>0){
        if(dGood){
          x1Calculation.innerHTML = "\\["+x1Applied.replace("aa",String(a)).replace("bb",String(b)).replace("DD",String(D))+x1Calculated+x1Calculated1+x1+" \\]";
          x2Calculation.innerHTML = "\\["+x2Applied.replace("aa",String(a)).replace("bb",String(b)).replace("DD",String(D))+x2Calculated+x2Calculated1+x2+" \\]";
        } else{
          if(dCeoff!=1){
            if(b!=0)
          if(ekub!=1){
            x1Calculation.innerHTML = "\\["+x1Applied.replace("aa",String(a)).replace("bb",String(b)).replace("DD",String(D))+x1Calculated+x1Calculated1+x1Calculated2+x1+" \\]";
            x2Calculation.innerHTML = "\\["+x2Applied.replace("aa",String(a)).replace("bb",String(b)).replace("DD",String(D))+x2Calculated+x2Calculated1+x2Calculated2+x2+" \\]";
          }else {
            x1Calculation.innerHTML = "\\["+x1Applied.replace("aa",String(a)).replace("bb",String(b)).replace("DD",String(D))+x1Calculated+x1Calculated1+" \\]";
            x2Calculation.innerHTML = "\\["+x2Applied.replace("aa",String(a)).replace("bb",String(b)).replace("DD",String(D))+x2Calculated+x2Calculated1+" \\]";
          }
          else {
            x1Calculation.innerHTML = "\\["+x1Applied.replace("aa",String(a)).replace("bb",String(b)).replace("DD",String(D))+x1Calculated+x1Calculated1+x1+" \\]";
            x2Calculation.innerHTML = "\\["+x2Applied.replace("aa",String(a)).replace("bb",String(b)).replace("DD",String(D))+x2Calculated+x2Calculated1+x2+" \\]";
          }
        }
        else {
            x1Calculation.innerHTML = "\\["+x1Applied.replace("aa",String(a)).replace("bb",String(b)).replace("DD",String(D))+x1Calculated+" \\]";
            x2Calculation.innerHTML = "\\["+x2Applied.replace("aa",String(a)).replace("bb",String(b)).replace("DD",String(D))+x2Calculated+" \\]";
          }
        }
      }
      if(D==0){
        x1Calculation.innerHTML = "\\["+x1Applied.replace("aa",String(a)).replace("bb",String(b)).replace("DD",String(D)).replace("_1","")+x1Calculated+x1+" \\]";
        x2Calculation.innerHTML = "";
      }
      if(D<0){
        x1Calculation.innerHTML = "Tenglama haqiqiy ildizlarga ega emas";
        x2Calculation.innerHTML = ""
      }
      MathJax.typesetPromise();
    }).catch((err) => alert("Xatolik: "+err.message));
  } else alert("Ushbu dasturga ko'ra a, b, c lar butun son bo'lishi kerak")
}

function findDivision(n,m){
  var e = findEK(n,m), x=n/e ,y=m/e;
  console.log(e)
  console.log(x)
  console.log(y)
  var val = x/y,fin;
  if(Number.isInteger(val)) fin=val; else {
    fin = "\\frac{xx}{yy}=".replace("xx",x).replace("yy",y)
    +
    "-aa\\frac{cc}{b}".replace("-",Math.trunc(val)!=0 ? "" : val>0 ? "" : "-").replace("aa",Math.trunc(val)==0 ? "" : Math.trunc(val)).replace("b",y).replace("cc",Math.abs(x)%y)
  }
  return fin;
}

function specialCase(s){
  var k = s.replace("zz",underRoot);
  e = findEK(dCeoff,2*a);
  k = k.replace("yy",dCeoff/e==1 ? "" : dCeoff/e);
  if(2*a/e!=1) return k.replace("tt",2*a/e); else{
    return "yy\\sqrt {zz}".replace("zz",underRoot).replace("yy",dCeoff/e==1 ? "" : dCeoff/e)
  }
}



function apply(s){
  var k = s.replace("aa",String(ekub)).replace("aa",String(ekub)).replace("bb",String(-b/ekub)).replace("cc",dCeoff/ekub!=1 ? String(dCeoff/ekub) : "").replace("dd",underRoot)
  if(2*a/(ekub)!=1) k = k.replace("ff",String(2*a/(ekub))); else {
    k = k.replace("ff","")
    k = k.replace("\\cdot","")
  }
  return k;
}

function findEK(a,b){
  a=Math.abs(a)
  b=Math.abs(b)
  min = Math.min(a,b)
  console.log(min)
  for (let i = min; i>0; i--) {
    if(goodDiv(a,i) && goodDiv(b,i)) return i;
  }
}

function findEKUB(a,b,c){
  a=Math.abs(a)
  b=Math.abs(b)
  c=Math.abs(c)
  min = Math.min(a,b,c)
  for (let i = min; i>0; i--) {
    if(goodDiv(a,i) && goodDiv(b,i) && goodDiv(c,i)) return i;
  }
}

function goodDiv(a,b){
  if(Number.isInteger(a/b)) return true; else return false;
}

function isDGood(d){
  if(Number.isInteger(Math.sqrt(d))) return true; else false;
}

function findDCeoff(d){
  for (let i=Math.trunc(Math.sqrt(d)); i>0; i--) {
    var n=d/(i*i)
    if(Number.isInteger(n)) {
      return i;
    }
  }
}
