import React from 'react';
import { format } from 'date-fns';
import { PostsResponse } from "../jsonStructure";
import { enGB } from 'date-fns/locale';

function getDate(dateString: string) {
  // Parse the input string into a Date object
  const date = new Date(dateString);

  // Format date
  const formattedDate = format(date, 'dd MMMM yyyy', { locale: enGB });
  return formattedDate;
}

export default getDate;