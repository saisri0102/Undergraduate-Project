import random
import names
from faker import Faker 

random.seed(45)

commands = ["INSERT INTO CUSTOMER VALUES(","INSERT INTO PRESCRIPTION VALUES(","INSERT INTO BILL VALUES("]
drugs = ['opioid','codeine','zopiclone','trazodone','hyoscine','diazepam','crocin']
cost = [random.randint(10,50) for i in range(len(drugs))]
n = int(input("Enter the number of tuples: "))
#file_name = input("Enter file name to save: ")
for i in range(n):
    l1 = []
    l2 = []
    l3 = []
    cust_id = "CUST"+str(random.randint(1000,9999))
    cust_gender = "M" if random.randint(1,2) == 1 else "F"
    if(cust_gender == "M"):
        cust_fnname = names.get_first_name(gender="male")
        cust_lname = names.get_last_name()
    cust_age = random.randint(18,45)
    cust_mail = cust_fnname + str(cust_age) + "@gmail.com"
    cust_add = Faker().address()
    while('\n' in cust_add):
        ind = cust_add.index('\n')
        cust_add = cust_add[:ind]+' '+cust_add[ind+1:]
    #print(cust_add)
    cust_phone = (random.randint(1,2)+7)*10**9+(random.randint(100000000,999999999))
    
    pres_id = 123000+i+1
    pres_drug = drugs[random.randint(0,len(drugs)-1)]
    pres_quantity = random.randint(1,10)

    bill_id = pres_id 
    bill_cost = cost[drugs.index(pres_drug)]*pres_quantity

    cashier = 'CASHIER' + str(random.randint(1000,1005))
    supplier = 'SUPPLIER' + str(random.randint(1000,1005))
    
    command0 = commands[0]
    l1 = [cust_id,cust_fnname,cust_lname,cust_mail,cust_phone,cust_gender,cust_add]
    
    command1 = commands[1]
    l2 = [pres_id,cust_id,cust_fnname,pres_drug,pres_quantity,cust_phone]

    command2 = commands[2]
    l3 = [bill_id,bill_cost,cust_add,cashier,supplier]

    command0 += ",".join(["'"+i+"'" if type(i)==str else str(i) for i in l1]) + ");"
    command1 += ",".join(["'"+i+"'" if type(i)==str else str(i) for i in l2]) + ");"
    command2 += ",".join(["'"+i+"'" if type(i)==str else str(i) for i in l3]) + ");"


    print(command0)
    print(command1)
    print(command2)
    print()