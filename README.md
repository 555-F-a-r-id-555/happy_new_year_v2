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
