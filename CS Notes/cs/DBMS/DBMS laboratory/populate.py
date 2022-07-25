import random
import names
from faker import Faker 
import datetime

random.seed(45)

commands = ["INSERT INTO CUSTOMER VALUES(","INSERT INTO PRESCRIPTION VALUES(","INSERT INTO BILL VALUES("]
drugs = ['opioid','codeine','zopiclone','trazodone','hyoscine','diazepam','crocin']
cost = [random.randint(10,50) for i in range(len(drugs))]
cashier_ids = [1002,1021,2116,3105]
supplier_ids = [2081,3123,1987,1742,2342,9876]
name_set = set()
n = int(input("Enter the number of tuples: "))
#file_name = input("Enter file name to save: ")
for i in range(n):
    l1 = []
    l2 = []
    l3 = []
    date = datetime.datetime.today()
    days = random.randint(1,70)
    date = date-datetime.timedelta(days=days)
    date = str(date.date())
    cust_id = "CUST"+str(random.randint(1000,9999))
    cust_gender = "M" if random.randint(1,2) == 1 else "F"

    while(1):
        if(cust_gender == "M"):
            cust_fname = names.get_first_name(gender="male")
        else:
            cust_fname = names.get_first_name(gender="female")
        cust_lname = names.get_last_name()
        name = cust_fname+cust_lname
        if(name in name_set):
            continue
        else:
            name_set.add(name)
            break

    cust_age = random.randint(18,45)
    cust_mail = cust_fname + str(cust_age) + "@gmail.com"
    cust_add = Faker().address()
    while('\n' in cust_add):
        ind = cust_add.index('\n')
        cust_add = cust_add[:ind]+' '+cust_add[ind+1:]
    #print(cust_add)
    cust_phone = (random.randint(1,2)+7)*10**9+(random.randint(100000000,999999999))
    
    pres_id = 123000+i+1
    pres_drug = drugs[random.randint(0,len(drugs)-1)]
    pres_quantity = random.randint(1,10)

    bill_id = 123600+i+1
    bill_cost = cost[drugs.index(pres_drug)]*pres_quantity

    cashier = 'CASHIER' + str(cashier_ids[random.randint(0,len(cashier_ids)-1)])
    supplier = 'SUPPL' + str(supplier_ids[random.randint(0,len(supplier_ids)-1)])
    
    command0 = commands[0]
    l1 = [cust_id,cust_fname,cust_lname,cust_mail,cust_phone,cust_gender,cust_age,cust_add]
    
    command1 = commands[1]
    l2 = [pres_id,date,cust_id,cust_fname,pres_drug,pres_quantity,cust_phone]

    command2 = commands[2]
    l3 = [bill_id,date,bill_cost,cust_add,cashier,supplier]

    command0 += ",".join(["'"+i+"'" if type(i)==str else str(i) for i in l1]) + ");"
    command1 += ",".join(["'"+i+"'" if type(i)==str else str(i) for i in l2]) + ");"
    command2 += ",".join(["'"+i+"'" if type(i)==str else str(i) for i in l3]) + ");"


    print(command0)
    print(command1)
    print(command2)
    print()