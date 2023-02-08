

fetch('https://danepubliczne.imgw.pl/api/data/synop')
.then((res) => res.json())
.then((info) => {
    

    const container = document.querySelector('.container');

    info.forEach((el) => {
        // console.log(el.stacja);
        const item = document.createElement('div');
        item.setAttribute('class', 'item');
        container.appendChild(item);

        const city = document.createElement('h3')
        city.setAttribute('class','city')
        city.textContent = `${el.stacja}`

        const temp = document.createElement('p')
        temp.setAttribute('class','temp')
        temp.textContent = `Temperatura: ${el.temperatura}°`

        const hum = document.createElement('p')
        hum.setAttribute('class','hum')
        hum.textContent = `Wilgotność względna: ${el.wilgotnosc_wzgledna}%`

        const press = document.createElement('p')
        press.setAttribute('class','press')
        press.textContent = `Ciśnienie: ${el.cisnienie} hPa`

        item.append(city, temp, hum, press);
    });
});
