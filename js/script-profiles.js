const users = ['Perfil', 'Perfil2', 'Perfil3'];

const members = document.querySelector('.members');
const addIcon = document.querySelector('.addIcon');

const userIcons = () => {
    users.reverse();
    users.map((curElem) => {
        members.insertAdjacentHTML('afterbegin', `
        <a href="./home.html" class="btn"><span>${curElem}</span></a>
        `);
    })
};

addIcon.addEventListener('click', () => {
    let userName = prompt('please enter your name');

    if(userName != null && !users.includes(userName)){
        users.push(userName);
        console.log(users);
        members.insertAdjacentHTML('afterbegin', `
        <a href="#" class="btn"><span>${userName}</span></a>
        `);
    }else{
        alert('username already exist');
    }
})


userIcons();
