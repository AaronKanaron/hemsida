import os, random, sys
from datetime import datetime
from tkinter import *


root=Tk()

def retrieve_input():

	inputValue=textBox.get("1.0","end-1c")
	inp = inputValue


	st = 'qRx+2å!pK-f:BmTPy5VNrlL_DJGdAFQävetIc7Sugi ,;bCw?aöH@oZUhY8kW"O1M.s3X4E069znj'

	date = datetime.today().strftime('%Y-%m-%d')


	inpEn = ""

	for i in inp:
		inpEn += str(st.index(i)) + ".W" + random.choice(st) + random.choice(st) + random.choice(st) + random.choice(st) + "W."


	with open("D:/javascript/enc-dec/Enc.txt", "a") as f:
		f.write("\n\n")
		f.write(":" + date + ":\n")
		f.write(inpEn)

	sys.exit()



textBox=Text(root, height=10, width=70)
textBox.pack()
buttonCommit=Button(root, pady=15, height=1, width=50, text="Commit", command=lambda: retrieve_input())
buttonCommit.pack()


mainloop()





