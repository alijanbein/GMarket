export const phoneStyle = (phone_number) => {
    return (
      phone_number.toString().slice(0, 3) +
      " " +
      phone_number.toString().slice(3, 5) +
      " " +
      phone_number.toString().slice(5, 8) +
      " " +
      phone_number.toString().slice(8)
    );
  };