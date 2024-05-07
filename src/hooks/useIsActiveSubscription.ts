import { isAfter, isBefore } from "date-fns";
import { useEffect, useState } from "react";
import { getCyclistSubscriptionsCount } from "../services/cyclist";
import { is } from 'date-fns/locale';

export function useIsActiveSubscription() {
  const [isActiveSubscription, setIsActiveSubscription] = useState(false);

  async function verifyIsActive() {
    // today is bigger than 04/18/2022
    let count = 0

    count = await getCyclistSubscriptionsCount();

    if (count <= 1500) {
      if(isAfter(new Date(), new Date("2024-05-04")) && isBefore(new Date(), new Date("2024-05-10"))){
        setIsActiveSubscription(true);
      }
    }

  }

  useEffect(() => {
    verifyIsActive()
  }, [])

  return {
    isActiveSubscription
  }
}