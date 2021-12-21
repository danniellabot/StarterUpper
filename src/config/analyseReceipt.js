// import fs from 'fs';
import {
  FormRecognizerClient,
  AzureKeyCredential,
} from '@azure/ai-form-recognizer';

const apiKey = 'cfae671db7604236a34ef4b0a750cc02';
const endpoint = 'https://robot-receipt.cognitiveservices.azure.com/';

const client = new FormRecognizerClient(
  endpoint,
  new AzureKeyCredential(apiKey),
);

// export const submitToMicrosoft3 = async downloadURL => {
//   const readStream = fs.createReadStream(downloadURL);
//   console.log('Submitting to Microsoft...', downloadURL);
//   if (downloadURL) {
//     try {
//       // const poller = await client.beginRecognizeReceipts(downloadURL, {
//       //   includeFieldElements: true,
//       //   onProgress: (state) => {
//       //     console.log(`analyzing status: ${state.status}`);
//       //   }
//       // });

//       const poller = await client.beginRecognizeReceipts(readStream, {
//         contentType: 'image/png',
//         onProgress: state => {
//           console.log(`status: ${state.status}`);
//         },
//       });

//       const [receipt] = await poller.pollUntilDone();

//       if (receipt === undefined) {
//         throw new Error('Failed to extract data from at least one receipt.');
//       }

//       console.log('Receipt fields:');
//       console.log(receipt);

//       // For a list of fields that are contained in the response, please refer to
//       // the "Supported fields" section at the following link:
//       // https://aka.ms/formrecognizer/receiptfields
//       const receiptTypeField = receipt.fields['ReceiptType'];
//       if (receiptTypeField.valueType === 'string') {
//         console.log(
//           `  Receipt Type: '${
//             receiptTypeField.value ?? '<missing>'
//           }', with confidence of ${receiptTypeField.confidence}`,
//         );
//       }
//       const merchantNameField = receipt.fields['MerchantName'];
//       if (merchantNameField.valueType === 'string') {
//         console.log(
//           `  Merchant Name: '${
//             merchantNameField.value ?? '<missing>'
//           }', with confidence of ${merchantNameField.confidence}`,
//         );
//       }
//       const transactionDate = receipt.fields['TransactionDate'];
//       if (transactionDate.valueType === 'date') {
//         console.log(
//           `  Transaction Date: '${
//             transactionDate.value ?? '<missing>'
//           }', with confidence of ${transactionDate.confidence}`,
//         );
//       }
//       const itemsField = receipt.fields['Items'];
//       if (itemsField.valueType === 'array') {
//         for (const itemField of itemsField.value ?? []) {
//           if (itemField.valueType === 'object') {
//             const itemNameField = itemField.value['Name'];
//             const itemQuantityField = itemField.value['Quantity'];
//             const itemPriceField = itemField.value['TotalPrice'];
//             if (
//               itemNameField.valueType === 'string' &&
//               itemQuantityField.valueType === 'number' &&
//               itemPriceField.valueType === 'number'
//             ) {
//               console.log(
//                 `Purchased ${itemNameField.value} x ${itemQuantityField.value} = ${itemPriceField.value}`,
//               );
//               // console.log(
//               //  `    Item Name: '${itemNameField.value ?? "<missing>"}', with confidence of ${
//               //    itemNameField.confidence
//               //  }`
//               //);
//             }
//           }
//         }
//       }
//       const totalField = receipt.fields['Total'];
//       if (totalField.valueType === 'number') {
//         console.log(
//           `  Total: '${totalField.value ?? '<missing>'}', with confidence of ${
//             totalField.confidence
//           }`,
//         );
//       }
//     } catch (error) {
//       console.error('The sample encountered an error:', error);
//       alert(error);
//     }
//   } else {
//     alert('Please select an image');
//   }
// };

export const submitToMicrosoft2 = async downloadURL => {
  try {
    const poller = await client.beginRecognizeReceiptsFromUrl(downloadURL, {
      includeFieldElements: true,
      onProgress: state => {
        console.log(`analyzing status: ${state.status}`);
      },
    });

    const [receipt] = await poller.pollUntilDone();
    console.log('HERES YOUR WHOLE RECEIPT', receipt);

    if (receipt === undefined) {
      throw new Error('Failed to extract data from at least one receipt.');
    }
  } catch (error) {
    alert(error);
  }
};

export const submitToMicrosoft = async downloadURL => {
  console.log('Submitting to Microsoft...', downloadURL);
  if (downloadURL) {
    try {
      const poller = await client.beginRecognizeReceiptsFromUrl(downloadURL, {
        includeFieldElements: true,
        onProgress: state => {
          console.log(`analyzing status: ${state.status}`);
        },
      });

      const [receipt] = await poller.pollUntilDone();

      if (receipt === undefined) {
        throw new Error('Failed to extract data from at least one receipt.');
      }

      console.log('Receipt fields:');
      console.log(receipt);

      // For a list of fields that are contained in the response, please refer to
      // the "Supported fields" section at the following link:
      // https://aka.ms/formrecognizer/receiptfields
      const receiptTypeField = receipt.fields['ReceiptType'];
      if (receiptTypeField.valueType === 'string') {
        console.log(
          `  Receipt Type: '${
            receiptTypeField.value ?? '<missing>'
          }', with confidence of ${receiptTypeField.confidence}`,
        );
      }
      const merchantNameField = receipt.fields['MerchantName'];
      if (merchantNameField.valueType === 'string') {
        console.log(
          `  Merchant Name: '${
            merchantNameField.value ?? '<missing>'
          }', with confidence of ${merchantNameField.confidence}`,
        );
      }
      const transactionDate = receipt.fields['TransactionDate'];
      if (transactionDate.valueType === 'date') {
        console.log(
          `  Transaction Date: '${
            transactionDate.value ?? '<missing>'
          }', with confidence of ${transactionDate.confidence}`,
        );
      }
      const itemsField = receipt.fields['Items'];
      if (itemsField.valueType === 'array') {
        for (const itemField of itemsField.value ?? []) {
          if (itemField.valueType === 'object') {
            const itemNameField = itemField.value['Name'];
            const itemQuantityField = itemField.value['Quantity'];
            const itemPriceField = itemField.value['TotalPrice'];
            if (
              itemNameField.valueType === 'string' &&
              itemQuantityField.valueType === 'number' &&
              itemPriceField.valueType === 'number'
            ) {
              console.log(
                `Purchased ${itemNameField.value} x ${itemQuantityField.value} = ${itemPriceField.value}`,
              );
              // console.log(
              //  `    Item Name: '${itemNameField.value ?? "<missing>"}', with confidence of ${
              //    itemNameField.confidence
              //  }`
              //);
            }
          }
        }
      }
      const totalField = receipt.fields['Total'];
      if (totalField.valueType === 'number') {
        console.log(
          `  Total: '${totalField.value ?? '<missing>'}', with confidence of ${
            totalField.confidence
          }`,
        );
      }
    } catch (error) {
      console.error('The sample encountered an error:', error);
      alert(error);
    }
  } else {
    alert('Please select an image');
  }
};

// if fields confidence < 0.6 , ask user to try again to select another image
