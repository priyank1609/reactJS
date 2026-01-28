function initBooking(name) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Booking initiated");
      res({
        bookingId: "387510384710",
        name,
      });
    }, 2000);
  });
}

function addGuest(booking, guest) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("guest added");
      booking["guest"] = guest;
      res(booking);
    }, 2000);
  });
}

function paymentStatus(booking, payment) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("payment done");
      booking["payment"] = payment;
      res(booking);
    }, 2000);
  });
}

// using promise chaining
// initBooking("Priyank")
//     .then((booking) => {
//         console.log("Got the response", booking);
//         return addGuest(booking, ["parth", "sachin"]);
//     })
//     .then((booking) => {
//         console.log("Got the response", booking);
//         return paymentStatus(booking, { paymentId: "1234", status: "Done" })
//     })
//     .then((booking) => {
//         console.log("Got the response", booking);
//     })
//     .catch((err) => {
//         console.log(err);
//     })


async function bookingFlow() {
  try {
    let booking = await initBooking("Priyank");
    booking = await addGuest(booking, ["parth", "sachin"]);
    booking = await paymentStatus(booking, {
      paymentId: "1234",
      status: "Done",
    });
    console.log(booking);
  } catch (error) {
    console.log(error);
  }
}

bookingFlow();