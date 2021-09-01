#!/usr/bin/env python
# -*- coding: utf-8 -*-
import random, os

substantiv = ["ett ekolle", "en senap", "en majonäs", "en cyskel", "ett träd", "en hjalmar", "en morris"]
namn = ["Eric", "Aaron", "Hjalmar", "Majlo", "Morran", "Leif", "Leo", "Asker"]

def r(i):
    return random.choice(i)


print("Det var en gång",
    r(substantiv),
    "som hette",
    r(namn)
)