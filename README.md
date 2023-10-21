<<<<<<< HEAD

### Урок 1. Работа с удалёнными репозиториями

    1. Выберите какой-нибудь проект на изучаемом вами языке программирования, с которым вы будете тренироваться работать в Git, и инициализируйте в папке этого проекта локальный репозиторий.
    2. Создайте непустой удалённый репозиторий (например, с файлом README.md) с именем, соответствующим имени этого проекта.
    3. Подключите свой проект к этому удалённому репозиторию и отправьте в него код этого проекта. Самостоятельно разрешите конфликты и проблемы, если они возникнут при выполнении данного задания.

### Урок 2. Работа с изменениями

    Данное домашнее задание является продолжением домашнего задания,
    которое вы выполняли на предыдущем семинаре в репозитории с собственным проектом.

    1. Просмотрите историю коммитов в своём проекте и выберите три случайных коммита.
    Просмотрите изменения, которые были в них сделаны.

    2. Верните эти изменения командой git revert последовательно,
    чтобы в итоге получилось тоже три коммита.

    3. Попробуйте отменить эти три коммита:
    * последний — командами git reset --soft и git restore;
    * предпоследний — командой git reset --mixed и git restore;
    * первый — командой git reset --hard.

#### additional information

    159  gitstatus
    160  git add .
    161  git commit -m 'README.md changed DZ_2 was added'
    162  git status
    163  git status
    164  git add .
    165  git commit -m 'div on line 24 was added'
    166  git status
    167  git status
    168  git add .
    169  git commit -m 'button on line 25 was added'
    170  git status
    171  git add .
    172  git commit -m 'input on line 26 was added'
    173  git status
    174  clear
    175  git log
    176  git rever 9b83b1d717eb6d7e8642c90115153a554bc6354f
    177  git status
    178  git revert 9b83b1d717eb6d7e8642c90115153a554bc6354f
    179  git status
    180  clear
    181  git log
    182  git revert 9b83b1d717eb6d7e8642c90115153a554bc6354f
    183  git status
    184  git log
    185  git revert 13021f43f166d1dd2befb6f58027539ae0d2ed2a
    186  git status
    187  clear
    188  git log
    189  git revert 02f8a6c9cd16d3dff1514940dfaa2cca540ee790
    190  git status
    191  git log
    192  clear
    193  git log
    194  git reset --soft 7ec8844238418f04889b6217774180f4ec53fc02
    195  git status
    196  git reset --soft 84a1a4609219d738336763bc2ec35502db3bd01b
    197  git status
    198  git restore --staged index.html
    199  git status
    200  git restore index.html
    201  git status
    202  clear
    203  git log
    204  git reset --mixed ce5acd171a75ce764fbe5f6a7195ab341e03a54a
    205  git status
    206  git restore index.html
    207  git status
    208  clear
    209  git status
    210  git log
    211  git reset --hard 9b83b1d717eb6d7e8642c90115153a554bc6354f
    212  git status
    213  git history
    214  history

    $ git reflog
    9b83b1d (HEAD -> main) HEAD@{0}: reset: moving to 9b83b1d717eb6d7e8642c90115153a554bc6354f
    ce5acd1 HEAD@{1}: reset: moving to ce5acd171a75ce764fbe5f6a7195ab341e03a54a
    84a1a46 HEAD@{2}: reset: moving to 84a1a4609219d738336763bc2ec35502db3bd01b
    7ec8844 HEAD@{3}: reset: moving to 7ec8844238418f04889b6217774180f4ec53fc02
    7ec8844 HEAD@{4}: revert: Revert "div on line 24 was added" by task2 in DZ_2_third_commit
    84a1a46 HEAD@{5}: revert: Revert "button on line 25 was added" by task2 in DZ_2_penultimate_commit
    ce5acd1 HEAD@{6}: revert: Revert "input on line 26 was added" by task2 in DZ_2_last_commit
    9b83b1d (HEAD -> main) HEAD@{7}: commit: input on line 26 was added
    13021f4 HEAD@{8}: commit: button on line 25 was added
    02f8a6c HEAD@{9}: commit: div on line 24 was added
    0a2d465 HEAD@{10}: commit: README.md changed DZ_2 was added
    68bdf01 (origin/main) HEAD@{11}: commit (merge): README changed
    ac279fd (origin/master, master) HEAD@{12}: checkout: moving from master to main
    ac279fd (origin/master, master) HEAD@{13}: commit: added README.md
    f294f2c HEAD@{14}: commit: some changes2 in index.html
    1d61cd3 HEAD@{15}: commit: some changes in index.html
    f8d7b39 HEAD@{16}: commit: added func-handle_key_press for message output2
    1801787 HEAD@{17}: commit: added flex-direction in body and margin-bottom in center
    7ea206c HEAD@{18}: commit: added textarea with id newYearWishes
    ec6ce52 HEAD@{19}: commit: added countdownTonewYear func
    e736c9d HEAD@{20}: commit (initial): initial commit

#### version_№2

    $ git reflog
    3ccea5f (HEAD -> main, origin/main) HEAD@{0}: checkout: moving from revert-on-line-24 to main
    7ec8844 (revert-on-line-24) HEAD@{1}: checkout: moving from main to revert-on-line-24
    3ccea5f (HEAD -> main, origin/main) HEAD@{2}: checkout: moving from revert-on-line-25 to main
    84a1a46 (revert-on-line-25) HEAD@{3}: checkout: moving from main to revert-on-line-25
    3ccea5f (HEAD -> main, origin/main) HEAD@{4}: checkout: moving from revert-on-line-26 to main
    ce5acd1 (revert-on-line-26) HEAD@{5}: checkout: moving from main to revert-on-line-26
    3ccea5f (HEAD -> main, origin/main) HEAD@{6}: commit: README added additional information
    9b83b1d HEAD@{7}: reset: moving to 9b83b1d717eb6d7e8642c90115153a554bc6354f
    ce5acd1 (revert-on-line-26) HEAD@{8}: reset: moving to ce5acd171a75ce764fbe5f6a7195ab341e03a54a
    84a1a46 (revert-on-line-25) HEAD@{9}: reset: moving to 84a1a4609219d738336763bc2ec35502db3bd01b
    7ec8844 (revert-on-line-24) HEAD@{10}: reset: moving to 7ec8844238418f04889b6217774180f4ec53fc02
    7ec8844 (revert-on-line-24) HEAD@{11}: revert: Revert "div on line 24 was added" by task2 in DZ_2_third_commit
    84a1a46 (revert-on-line-25) HEAD@{12}: revert: Revert "button on line 25 was added" by task2 in DZ_2_penultimate_c
    ommit
    ce5acd1 (revert-on-line-26) HEAD@{13}: revert: Revert "input on line 26 was added" by task2 in DZ_2_last_commit
    9b83b1d HEAD@{14}: commit: input on line 26 was added
    13021f4 HEAD@{15}: commit: button on line 25 was added
    02f8a6c HEAD@{16}: commit: div on line 24 was added
    0a2d465 HEAD@{17}: commit: README.md changed DZ_2 was added
    68bdf01 HEAD@{18}: commit (merge): README changed
    ac279fd (origin/master, master) HEAD@{19}: checkout: moving from master to main
    ac279fd (origin/master, master) HEAD@{20}: commit: added README.md
    f294f2c HEAD@{21}: commit: some changes2 in index.html
    1d61cd3 HEAD@{22}: commit: some changes in index.html
    f8d7b39 HEAD@{23}: commit: added func-handle_key_press for message output2
    1801787 HEAD@{24}: commit: added flex-direction in body and margin-bottom in center
    7ea206c HEAD@{25}: commit: added textarea with id newYearWishes
    ec6ce52 HEAD@{26}: commit: added countdownTonewYear func
    e736c9d HEAD@{27}: commit (initial): initial commit
    
    fred1@DESKTOP-EMH98NN MINGW64 /s/GIT/happy_new_year (main)
    $ git branch -a
    * main
      master
      revert-on-line-24
      revert-on-line-25
      revert-on-line-26
      remotes/origin/main
      remotes/origin/master
