import { firestore, fieldValue, timestamp} from './firebase.js'

export async function updateEmailList(newEmail){
    await firestore.collection('RandomData').doc("WaitListEmail").update({
        waitList: fieldValue.arrayUnion({"email": newEmail, "time": timestamp.fromDate(new Date())}),
    });
}

