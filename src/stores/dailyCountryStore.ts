import type { CountryDetails } from "$lib/server/types/Types";
import { browser } from "$app/environment";
import { writable } from "svelte/store";

const defaultValue: String = "US";
const initialValue = browser ? window.localStorage.getItem('theme') ?? defaultValue : defaultValue;

const dailyCountry = writable<String>(initialValue);

dailyCountry.subscribe((value) => localStorage.dailyCountry =)