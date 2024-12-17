class Register {
  constructor() {
    const main = document.querySelector("main");

    this.inputs = main.querySelectorAll("input");

    this.name = main.querySelector("input#name");
    this.birth = main.querySelector("input#birth");
    this.id = main.querySelector("input#id");
    this.setPw = main.querySelector("input#setPw");
    this.checkPw = main.querySelector("input#checkPw");

    this.regBtn = main.querySelector("button")
  }

  // 빈 입력값 에러 처리 
  emptyError() {
    const inputArr = Array.from(this.inputs);
    const isFilled = inputArr.every(input => input.value !== "");

    if(isFilled) {
      this.regBtn.disabled = false;
      this.regBtn.classList.add('active')
    } else {
      this.regBtn.disabled = true;
      this.regBtn.classList.remove('active')
    }
  }

  // 생년월일 에러 처리
  birthError() {
    this.birth.nextElementSibling.style.display = "none";
    
    const birth = this.birth.value;
    const birthValidation = /[0-9]/g;
    const validateResult = birthValidation.test(birth);
    
    this.regBtn.addEventListener("click", () => {
      if(!validateResult) {
        this.birth.nextElementSibling.style.display = "block";
      } else {
        this.birth.nextElementSibling.style.display = "none";
      }
    })
  }

  idError() {
    this.id.nextElementSibling.style.display = "none";
    
    const id = this.id.value;
    const idValidation = /^[0-9a-zA-z]{5,15}/g;
    const validateResult = idValidation.test(id);
    
    this.regBtn.addEventListener("click", () => {
      if(!validateResult) {
        this.id.nextElementSibling.style.display = "block";
      } else {
        this.id.nextElementSibling.style.display = "none";
      }
    })
  }

  validateForm() {
    this.inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this.emptyError();
        this.birthError();
        this.idError();
      })
    })
    this.emptyError();
    this.birthError();
    this.idError();
  }
}

const registerPage = new Register();
registerPage.validateForm();