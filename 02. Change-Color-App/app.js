document.addEventListener('DOMContentLoaded', () => {
    const colorName = document.getElementById('color-name');
    const changeColor = document.getElementById('change-color');


    function getRandomColor() {
        let letter = '0123456789ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++) {
            let random = Math.floor(Math.random() * 16);
            color += letter[random]
        }
        return color;
    }

    changeColor.addEventListener('click', () => {
        document.body.style.backgroundColor = getRandomColor();
        colorName.textContent = getRandomColor();



    })
})