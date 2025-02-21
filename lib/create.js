"use server"
import { Trans } from "@/models/trans";
import { User } from "@/models/user";
import { connectToDb } from "@/mongodb/connect";
import { disconnectFromDb } from "@/mongodb/disconnect";
import { currentUser } from "@clerk/nextjs";

export const CreateAccount = async () => {

    const user = await currentUser();
    const email = user.emailAddresses[0].emailAddress;
    const payz = email.split("@")[0] + "@payz";

    await connectToDb();
    const findAcc = await User.findOne({ email });
    if (findAcc) {
        return { email: findAcc.email, payz: findAcc.payz, balance: findAcc.balance };
    }
    else {
        try {
            const account = await User.create({ email, payz, balance: 250 });
            return { email: account.email, payz: account.payz, balance: account.balance };
        }
        catch (err) {
            return { email: null, payz: null, balance: null };
        }
    }
}

export const makeTrans = async (payz, amount) => {
    const curruser = await currentUser();
    const email = curruser.emailAddresses[0].emailAddress;

    await connectToDb();
    const user = await User.findOne({ payz });
    const fromUser = await User.findOne({ email });
    const amountT = parseInt(amount);
    if (fromUser.balance < amount) {
        return { error: "insufficient balance" };
    }
    else if (fromUser.payz == payz) {
        return { error: "cannot pay yourself" };
    }
    try {
        if (!user) {
            return { error: "invalid payz id" };
        }
        else {
            await createHist(amountT, fromUser.payz, user.payz);
            user.balance = user.balance + amountT;
            await user.save();
            fromUser.balance = fromUser.balance - amountT;
            await fromUser.save();
            return { success: true };
        }
    }
    catch (err) {
        console.log(err);
        return { error: err };
    }
};

export const createHist = async (amount, from, to) => {
    await connectToDb();
    try {
        await Trans.create({ amount, from, to });
        return { success: true };
    }
    catch (err) {
        return { error: err };
    }
}

export const getHist = async () => {
    const user = await currentUser();
    const email = user.emailAddresses[0].emailAddress;
    const { payz } = await User.findOne({ email });
    await connectToDb();
    return await Trans.find({ to:payz });
}

export const getFromHist = async () => {
    const user = await currentUser();
    const email = user.emailAddresses[0].emailAddress;
    const { payz } = await User.findOne({ email });
    await connectToDb();
    return await Trans.find({ from:payz });
}
