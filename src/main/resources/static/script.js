// script.js

// Select elements
const seats = document.querySelectorAll('.seat');
const selectedSeatInput = document.getElementById('selectedSeat');
const bookingForm = document.getElementById('bookingForm');
const reservationSummary = document.getElementById('reservationSummary');

// Track selected seat
let selectedSeat = null;

// Seat click event
seats.forEach(seat => {
    seat.addEventListener('click', () => {
        if (seat.classList.contains('selected')) {
            alert('This seat is already booked!');
            return;
        }
        if (selectedSeat) {
            selectedSeat.classList.remove('active');
        }
        seat.classList.add('active');
        selectedSeat = seat;
        selectedSeatInput.value = seat.dataset.seat;
    });
});

// Form submission
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const destination = document.getElementById('destination').value;
    const seatNumber = selectedSeatInput.value;

    if (!seatNumber) {
        alert('Please select a seat!');
        return;
    }

    // Mark seat as booked
    selectedSeat.classList.add('selected');
    selectedSeat.classList.remove('active');

    // Add to reservation summary
    const listItem = document.createElement('li');
    listItem.textContent = `Name: ${name}, Destination: ${destination}, Seat: ${seatNumber}`;
    reservationSummary.appendChild(listItem);

    // Reset form
    bookingForm.reset();
    selectedSeatInput.value = '';
    selectedSeat = null;
});
