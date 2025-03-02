import { PaymentResponse } from "../types";

export const mockPayment = (paymentMethod: string, amount: number):Promise<PaymentResponse> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.2) { // Simulate an 80% success rate
          resolve({
            success: true,
            message: `Payment of $${amount} via ${paymentMethod} was successful!`,
          });
        } else {
          reject({
            success: false,
            message: `Payment of $${amount} via ${paymentMethod} failed. Please try again.`,
          });
        }
      }, 2000); // Simulate a 2-second delay
    });
  };