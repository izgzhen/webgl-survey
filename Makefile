MAIN := webgl-survey
SRC := $(patsubst %.md,%.tex, $(filter-out $(MAIN).md, $(wildcard **/*.md)))
OPT := --variable linkcolor=blue urlcolor=blue --no-highlight

all : $(MAIN).pdf

$(MAIN).pdf : $(SRC) $(MAIN).md
	pandoc $(MAIN).md $(OPT) --latex-engine=xelatex -o $(MAIN).pdf

%.tex : %.md
	pandoc  $< $(OPT) -o $@

clean :
	rm -f $(SRC) $(MAIN).tex

rebuild : clean all
