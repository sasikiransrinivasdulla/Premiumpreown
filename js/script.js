const cars = [
    { name: "Toyota Corolla", price: "$10,000", model: "XLI", year: 2018, image: "../images/toyota_corolla.jpg", contact: "+1234567890" },
    { name: "Honda Civic", price: "$9,500", model: "VTI", year: 2017, image: "../images/honda_civic.jpg", contact: "+1234567890" },
    { name: "Ford Focus", price: "$8,200", model: "SE", year: 2016, image: "../images/ford_focus.jpg", contact: "+1234567890" },
    { name: "Chevrolet Malibu", price: "$12,300", model: "LT", year: 2019, image: "../images/chevrolet_malibu.jpg", contact: "+1234567890" },
    { name: "Nissan Altima", price: "$11,500", model: "SV", year: 2020, image: "../images/nissan_altima.jpg", contact: "+1234567890" },
    { name: "Mazda 3", price: "$7,800", model: "Sport", year: 2015, image: "../images/mazda_3.jpg", contact: "+1234567890" },
    { name: "Subaru Impreza", price: "$9,900", model: "Premium", year: 2018, image: "../images/subaru_impreza.jpg", contact: "+1234567890" },
    { name: "Volkswagen Jetta", price: "$10,500", model: "GLI", year: 2019, image: "../images/volkswagen_jetta.jpg", contact: "+1234567890" }
];

const carsPerPage = 4;
let currentPage = 1;

function renderCars() {
    const carList = document.getElementById('car-list');
    const pagination = document.getElementById('pagination');
    carList.innerHTML = '';
    pagination.innerHTML = '';

    const start = (currentPage - 1) * carsPerPage;
    const end = start + carsPerPage;
    const currentCars = cars.slice(start, end);

    currentCars.forEach(car => {
        const carDiv = document.createElement('div');
        carDiv.classList.add('car');
        carDiv.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <h3>${car.name}</h3>
            <p>Price: ${car.price}</p>
            <p>Model: ${car.model}</p>
            <p>Launch Year: ${car.year}</p>
            <p>Contact: ${car.contact}</p>
        `;
        carList.appendChild(carDiv);
    });

    const totalPages = Math.ceil(cars.length / carsPerPage);
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.classList.add(i === currentPage ? 'active' : '');
        button.addEventListener('click', () => {
            currentPage = i;
            renderCars();
        });
        pagination.appendChild(button);
    }
}

document.addEventListener('DOMContentLoaded', renderCars);
