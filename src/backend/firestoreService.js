import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebase";

// add a new habit for a user
export const addHabit = async (habit) => {
  // habit should contain: userId, title, description?, frequencyType, etc.
  const colRef = collection(db, "habits");
  const docRef = await addDoc(colRef, {
    ...habit,
    createdAt: Date.now(),
    isArchived: false,
  });
  return docRef.id;
};

//    get all active or (non-archived) habits for a user
export const getHabitsForUser = async (userId) => {
  const colRef = collection(db, "habits");
  const q = query(
    colRef,
    where("userId", "==", userId),
    where("isArchived", "==", false)
  );

  const snapshot = await getDocs(q);
  const habits = snapshot.docs.map((d) => ({
    id: d.id,
    ...d.data(),
  }));

  return habits;
};

//    update an existing habit etc
export const updateHabit = async (habitId, updates) => {
  const docRef = doc(db, "habits", habitId);
  await updateDoc(docRef, {
    ...updates,
  });
};

//    archive habit instead of removing, later might add the complete removal
export const archiveHabit = async (habitId) => {
  const docRef = doc(db, "habits", habitId);
  await updateDoc(docRef, { isArchived: true });
};

//    log a habit for a specific day
//    log = { habitId, userId, date, completedCount, isCompleted, notes? }
export const logHabitCompletion = async (log) => {
  const colRef = collection(db, "habitLogs");
  const docRef = await addDoc(colRef, {
    ...log,
    updatedAt: Date.now(),
  });
  return docRef.id;
};

//    get all logs for a user on a specific date
//    for example "today's progress" screen
export const getLogsForUserOnDate = async (userId, date) => {
  const colRef = collection(db, "habitLogs");
  const q = query(
    colRef,
    where("userId", "==", userId),
    where("date", "==", date)
  );

  const snapshot = await getDocs(q);
  const logs = snapshot.docs.map((d) => ({
    id: d.id,
    ...d.data(),
  }));

  return logs;
};
