all = """sanskrit kalidasa shakuntala
english r_k_narayan malgudi_days
kannada kuvempu ramayanadarshanam
sanskrit bhasa swapnavasavadatta
kannada kuvempu malegalalli_madumagalu
english r_k_narayan dateless_diary
kannada karanta chomanadudi
sanskrit baana harshacharita
kannada karanta sarasatammana_Samadhi
sanskrit kalidasa malavikagnimitra
sanskrit kalidasa raghuvamsha
sanskrit baana kadambari
sanskrit bhasa pratijnayogandhararayana"""
# program to find the number of languages
# to find the no of books in each language
langcount = set()
for s in all.split('\n'):
	#lang = s.split()[0]
	langcount.add(s[0])
print("No of languages",len(langcount))
# no of books
bookcount = {}
for s in all.split('\n'):
	lang = s.split()[0]
	if lang not in bookcount:
		bookcount[lang] = 0
	bookcount[lang] += 1
print(bookcount)
# no of authors in each lang
authorcount = {}
for s in all.split('\n'):
	(lang, author) = s.split()[:2]
	if lang not in authorcount:
		authorcount[lang] = {}
	if author not in authorcount[lang]:
		authorcount[lang][author]=0
	authorcount[lang][author] += 1
print(authorcount)
for k in authorcount:
	for j in authorcount[k]:
		print(j, "==>",authorcount[k][j])





	











