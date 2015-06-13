__author__ = 'ykhan14'

import re
group = re.compile("^\s*<group")
char = re.compile("^\s*<char")
group_count = 0
char_count = 0
with open("ucd.all.grouped.xml","r") as big_file:
    for line in big_file.readlines():
        # if char.match(line):
        #     char_count += 1
        if group.match(line):
            group_count += 1
            char_count = 0
        if group_count == 25:
            if char.match(line):
                char_count += 1
            print(group_count,char_count,line.strip(), end='')
            input()
    print (group_count)

#GENERATED OUTPUT:

# 25 0 <group age="1.1" JSN="" gc="Lo" ccc="0" dt="none" dm="#" nt="None" nv="NaN" bc="L" bpt="n" bpb="#" Bidi_M="N" bmg="" suc="#" slc="#" stc="#" uc="#" lc="#" tc="#" scf="#" cf="#" jt="U" jg="No_Joining_Group" ea="N" lb="AL" sc="Beng" scx="Beng" Dash="N" WSpace="N" Hyphen="N" QMark="N" Radical="N" Ideo="N" UIdeo="N" IDSB="N" IDST="N" hst="NA" DI="N" ODI="N" Alpha="Y" OAlpha="N" Upper="N" OUpper="N" Lower="N" OLower="N" Math="N" OMath="N" Hex="N" AHex="N" NChar="N" VS="N" Bidi_C="N" Join_C="N" Gr_Base="Y" Gr_Ext="N" OGr_Ext="N" Gr_Link="N" STerm="N" Ext="N" Term="N" Dia="N" Dep="N" IDS="Y" OIDS="N" XIDS="Y" IDC="Y" OIDC="N" XIDC="Y" SD="N" LOE="N" Pat_WS="N" Pat_Syn="N" GCB="XX" WB="LE" SB="LE" CE="N" Comp_Ex="N" NFC_QC="Y" NFD_QC="Y" NFKC_QC="Y" NFKD_QC="Y" XO_NFC="N" XO_NFD="N" XO_NFKC="N" XO_NFKD="N" FC_NFKC="#" CI="N" Cased="N" CWCF="N" CWCM="N" CWKCF="N" CWL="N" CWT="N" CWU="N" NFKC_CF="#" InSC="Consonant" InMC="NA" blk="Bengali" isc="" na1="">
# 25 1 <char cp="0980" age="7.0" na="BENGALI ANJI" InSC="Other"/>
# 25 2 <char cp="0981" na="BENGALI SIGN CANDRABINDU" gc="Mn" bc="NSM" jt="T" lb="CM" OAlpha="Y" Gr_Base="N" Gr_Ext="Y" IDS="N" XIDS="N" GCB="EX" WB="Extend" SB="EX" CI="Y" InSC="Bindu"/>
# 25 3 <char cp="0982" na="BENGALI SIGN ANUSVARA" gc="Mc" lb="CM" OAlpha="Y" IDS="N" XIDS="N" GCB="SM" WB="Extend" SB="EX" InSC="Bindu"/>
# 25 4 <char cp="0983" na="BENGALI SIGN VISARGA" gc="Mc" lb="CM" OAlpha="Y" IDS="N" XIDS="N" GCB="SM" WB="Extend" SB="EX" InSC="Visarga"/>
# 25 4 <reserved cp="0984" age="unassigned" na="" gc="Cn" lb="XX" sc="Zzzz" scx="Zzzz" Alpha="N" Gr_Base="N" IDS="N" XIDS="N" IDC="N" XIDC="N" WB="XX" SB="XX" InSC="Other"/>
# 25 5 <char cp="0985" na="BENGALI LETTER A" InSC="Vowel_Independent"/>
# 25 6 <char cp="0986" na="BENGALI LETTER AA" InSC="Vowel_Independent"/>
# 25 7 <char cp="0987" na="BENGALI LETTER I" InSC="Vowel_Independent"/>
# 25 8 <char cp="0988" na="BENGALI LETTER II" InSC="Vowel_Independent"/>
# 25 9 <char cp="0989" na="BENGALI LETTER U" InSC="Vowel_Independent"/>
# 25 10 <char cp="098A" na="BENGALI LETTER UU" InSC="Vowel_Independent"/>
# 25 11 <char cp="098B" na="BENGALI LETTER VOCALIC R" InSC="Vowel_Independent"/>
# 25 12 <char cp="098C" na="BENGALI LETTER VOCALIC L" InSC="Vowel_Independent"/>
# 25 12 <reserved first-cp="098D" last-cp="098E" age="unassigned" na="" gc="Cn" lb="XX" sc="Zzzz" scx="Zzzz" Alpha="N" Gr_Base="N" IDS="N" XIDS="N" IDC="N" XIDC="N" WB="XX" SB="XX" InSC="Other"/>
# 25 13 <char cp="098F" na="BENGALI LETTER E" InSC="Vowel_Independent"/>
# 25 14 <char cp="0990" na="BENGALI LETTER AI" InSC="Vowel_Independent"/>
# 25 14 <reserved first-cp="0991" last-cp="0992" age="unassigned" na="" gc="Cn" lb="XX" sc="Zzzz" scx="Zzzz" Alpha="N" Gr_Base="N" IDS="N" XIDS="N" IDC="N" XIDC="N" WB="XX" SB="XX" InSC="Other"/>
# 25 15 <char cp="0993" na="BENGALI LETTER O" InSC="Vowel_Independent"/>
# 25 16 <char cp="0994" na="BENGALI LETTER AU" InSC="Vowel_Independent"/>
# 25 17 <char cp="0995" na="BENGALI LETTER KA"/>
# 25 18 <char cp="0996" na="BENGALI LETTER KHA"/>
# 25 19 <char cp="0997" na="BENGALI LETTER GA"/>
# 25 20 <char cp="0998" na="BENGALI LETTER GHA"/>
# 25 21 <char cp="0999" na="BENGALI LETTER NGA"/>
# 25 22 <char cp="099A" na="BENGALI LETTER CA"/>
# 25 23 <char cp="099B" na="BENGALI LETTER CHA"/>
# 25 24 <char cp="099C" na="BENGALI LETTER JA"/>
# 25 25 <char cp="099D" na="BENGALI LETTER JHA"/>
# 25 26 <char cp="099E" na="BENGALI LETTER NYA"/>
# 25 27 <char cp="099F" na="BENGALI LETTER TTA"/>
# 25 28 <char cp="09A0" na="BENGALI LETTER TTHA"/>
# 25 29 <char cp="09A1" na="BENGALI LETTER DDA"/>
# 25 30 <char cp="09A2" na="BENGALI LETTER DDHA"/>
# 25 31 <char cp="09A3" na="BENGALI LETTER NNA"/>
# 25 32 <char cp="09A4" na="BENGALI LETTER TA"/>
# 25 33 <char cp="09A5" na="BENGALI LETTER THA"/>
# 25 34 <char cp="09A6" na="BENGALI LETTER DA"/>
# 25 35 <char cp="09A7" na="BENGALI LETTER DHA"/>
# 25 36 <char cp="09A8" na="BENGALI LETTER NA"/>
# 25 36 <reserved cp="09A9" age="unassigned" na="" gc="Cn" lb="XX" sc="Zzzz" scx="Zzzz" Alpha="N" Gr_Base="N" IDS="N" XIDS="N" IDC="N" XIDC="N" WB="XX" SB="XX" InSC="Other"/>
# 25 37 <char cp="09AA" na="BENGALI LETTER PA"/>
# 25 38 <char cp="09AB" na="BENGALI LETTER PHA"/>
# 25 39 <char cp="09AC" na="BENGALI LETTER BA"/>
# 25 40 <char cp="09AD" na="BENGALI LETTER BHA"/>
# 25 41 <char cp="09AE" na="BENGALI LETTER MA"/>
# 25 42 <char cp="09AF" na="BENGALI LETTER YA"/>
# 25 43 <char cp="09B0" na="BENGALI LETTER RA"/>
# 25 43 <reserved cp="09B1" age="unassigned" na="" gc="Cn" lb="XX" sc="Zzzz" scx="Zzzz" Alpha="N" Gr_Base="N" IDS="N" XIDS="N" IDC="N" XIDC="N" WB="XX" SB="XX" InSC="Other"/>
# 25 44 <char cp="09B2" na="BENGALI LETTER LA"/>
# 25 44 <reserved first-cp="09B3" last-cp="09B5" age="unassigned" na="" gc="Cn" lb="XX" sc="Zzzz" scx="Zzzz" Alpha="N" Gr_Base="N" IDS="N" XIDS="N" IDC="N" XIDC="N" WB="XX" SB="XX" InSC="Other"/>
# 25 45 <char cp="09B6" na="BENGALI LETTER SHA"/>
# 25 46 <char cp="09B7" na="BENGALI LETTER SSA"/>
# 25 47 <char cp="09B8" na="BENGALI LETTER SA"/>
# 25 48 <char cp="09B9" na="BENGALI LETTER HA"/>
# 25 48 <reserved first-cp="09BA" last-cp="09BB" age="unassigned" na="" gc="Cn" lb="XX" sc="Zzzz" scx="Zzzz" Alpha="N" Gr_Base="N" IDS="N" XIDS="N" IDC="N" XIDC="N" WB="XX" SB="XX" InSC="Other"/>
# 25 49 <char cp="09BC" na="BENGALI SIGN NUKTA" gc="Mn" ccc="7" bc="NSM" jt="T" lb="CM" Alpha="N" Gr_Base="N" Gr_Ext="Y" Dia="Y" IDS="N" XIDS="N" GCB="EX" WB="Extend" SB="EX" CI="Y" InSC="Nukta"/>
# 25 50 <char cp="09BD" age="4.0" na="BENGALI SIGN AVAGRAHA" InSC="Avagraha"/>
# 25 51 <char cp="09BE" na="BENGALI VOWEL SIGN AA" gc="Mc" lb="CM" OAlpha="Y" Gr_Base="N" Gr_Ext="Y" OGr_Ext="Y" IDS="N" XIDS="N" GCB="EX" WB="Extend" SB="EX" NFC_QC="M" NFKC_QC="M" InSC="Vowel_Dependent" InMC="Right"/>
# 25 52 <char cp="09BF" na="BENGALI VOWEL SIGN I" gc="Mc" lb="CM" OAlpha="Y" IDS="N" XIDS="N" GCB="SM" WB="Extend" SB="EX" InSC="Vowel_Dependent" InMC="Left"/>
# 25 53 <char cp="09C0" na="BENGALI VOWEL SIGN II" gc="Mc" lb="CM" OAlpha="Y" IDS="N" XIDS="N" GCB="SM" WB="Extend" SB="EX" InSC="Vowel_Dependent" InMC="Right"/>
# 25 54 <char cp="09C1" na="BENGALI VOWEL SIGN U" gc="Mn" bc="NSM" jt="T" lb="CM" OAlpha="Y" Gr_Base="N" Gr_Ext="Y" IDS="N" XIDS="N" GCB="EX" WB="Extend" SB="EX" CI="Y" InSC="Vowel_Dependent" InMC="Bottom"/>
# 25 55 <char cp="09C2" na="BENGALI VOWEL SIGN UU" gc="Mn" bc="NSM" jt="T" lb="CM" OAlpha="Y" Gr_Base="N" Gr_Ext="Y" IDS="N" XIDS="N" GCB="EX" WB="Extend" SB="EX" CI="Y" InSC="Vowel_Dependent" InMC="Bottom"/>
# 25 56 <char cp="09C3" na="BENGALI VOWEL SIGN VOCALIC R" gc="Mn" bc="NSM" jt="T" lb="CM" OAlpha="Y" Gr_Base="N" Gr_Ext="Y" IDS="N" XIDS="N" GCB="EX" WB="Extend" SB="EX" CI="Y" InSC="Vowel_Dependent" InMC="Bottom"/>
# 25 57 <char cp="09C4" na="BENGALI VOWEL SIGN VOCALIC RR" gc="Mn" bc="NSM" jt="T" lb="CM" OAlpha="Y" Gr_Base="N" Gr_Ext="Y" IDS="N" XIDS="N" GCB="EX" WB="Extend" SB="EX" CI="Y" InSC="Vowel_Dependent" InMC="Bottom"/>
# 25 57 <reserved first-cp="09C5" last-cp="09C6" age="unassigned" na="" gc="Cn" lb="XX" sc="Zzzz" scx="Zzzz" Alpha="N" Gr_Base="N" IDS="N" XIDS="N" IDC="N" XIDC="N" WB="XX" SB="XX" InSC="Other"/>
# 25 58 <char cp="09C7" na="BENGALI VOWEL SIGN E" gc="Mc" lb="CM" OAlpha="Y" IDS="N" XIDS="N" GCB="SM" WB="Extend" SB="EX" InSC="Vowel_Dependent" InMC="Left"/>
# 25 59 <char cp="09C8" na="BENGALI VOWEL SIGN AI" gc="Mc" lb="CM" OAlpha="Y" IDS="N" XIDS="N" GCB="SM" WB="Extend" SB="EX" InSC="Vowel_Dependent" InMC="Left"/>
# 25 59 <reserved first-cp="09C9" last-cp="09CA" age="unassigned" na="" gc="Cn" lb="XX" sc="Zzzz" scx="Zzzz" Alpha="N" Gr_Base="N" IDS="N" XIDS="N" IDC="N" XIDC="N" WB="XX" SB="XX" InSC="Other"/>
# 25 60 <char cp="09CB" na="BENGALI VOWEL SIGN O" gc="Mc" dt="can" dm="09C7 09BE" lb="CM" OAlpha="Y" IDS="N" XIDS="N" GCB="SM" WB="Extend" SB="EX" NFD_QC="N" NFKD_QC="N" XO_NFD="Y" XO_NFKD="Y" InSC="Vowel_Dependent" InMC="Left_And_Right"/>
# 25 61 <char cp="09CC" na="BENGALI VOWEL SIGN AU" gc="Mc" dt="can" dm="09C7 09D7" lb="CM" OAlpha="Y" IDS="N" XIDS="N" GCB="SM" WB="Extend" SB="EX" NFD_QC="N" NFKD_QC="N" XO_NFD="Y" XO_NFKD="Y" InSC="Vowel_Dependent" InMC="Left_And_Right"/>
# 25 62 <char cp="09CD" na="BENGALI SIGN VIRAMA" gc="Mn" ccc="9" bc="NSM" jt="T" lb="CM" Alpha="N" Gr_Base="N" Gr_Ext="Y" Gr_Link="Y" Dia="Y" IDS="N" XIDS="N" GCB="EX" WB="Extend" SB="EX" CI="Y" InSC="Virama" InMC="Bottom"/>
# 25 63 <char cp="09CE" age="4.1" na="BENGALI LETTER KHANDA TA" InSC="Consonant_Dead"/>
# 25 63 <reserved first-cp="09CF" last-cp="09D6" age="unassigned" na="" gc="Cn" lb="XX" sc="Zzzz" scx="Zzzz" Alpha="N" Gr_Base="N" IDS="N" XIDS="N" IDC="N" XIDC="N" WB="XX" SB="XX" InSC="Other"/>
# 25 64 <char cp="09D7" na="BENGALI AU LENGTH MARK" gc="Mc" lb="CM" OAlpha="Y" Gr_Base="N" Gr_Ext="Y" OGr_Ext="Y" IDS="N" XIDS="N" GCB="EX" WB="Extend" SB="EX" NFC_QC="M" NFKC_QC="M" InSC="Vowel_Dependent" InMC="Right"/>
# 25 64 <reserved first-cp="09D8" last-cp="09DB" age="unassigned" na="" gc="Cn" lb="XX" sc="Zzzz" scx="Zzzz" Alpha="N" Gr_Base="N" IDS="N" XIDS="N" IDC="N" XIDC="N" WB="XX" SB="XX" InSC="Other"/>
# 25 65 <char cp="09DC" na="BENGALI LETTER RRA" dt="can" dm="09A1 09BC" CE="Y" Comp_Ex="Y" NFC_QC="N" NFD_QC="N" NFKC_QC="N" NFKD_QC="N" XO_NFC="Y" XO_NFD="Y" XO_NFKC="Y" XO_NFKD="Y" CWKCF="Y" NFKC_CF="09A1 09BC"/>
# 25 66 <char cp="09DD" na="BENGALI LETTER RHA" dt="can" dm="09A2 09BC" CE="Y" Comp_Ex="Y" NFC_QC="N" NFD_QC="N" NFKC_QC="N" NFKD_QC="N" XO_NFC="Y" XO_NFD="Y" XO_NFKC="Y" XO_NFKD="Y" CWKCF="Y" NFKC_CF="09A2 09BC"/>
# 25 66 <reserved cp="09DE" age="unassigned" na="" gc="Cn" lb="XX" sc="Zzzz" scx="Zzzz" Alpha="N" Gr_Base="N" IDS="N" XIDS="N" IDC="N" XIDC="N" WB="XX" SB="XX" InSC="Other"/>
# 25 67 <char cp="09DF" na="BENGALI LETTER YYA" dt="can" dm="09AF 09BC" CE="Y" Comp_Ex="Y" NFC_QC="N" NFD_QC="N" NFKC_QC="N" NFKD_QC="N" XO_NFC="Y" XO_NFD="Y" XO_NFKC="Y" XO_NFKD="Y" CWKCF="Y" NFKC_CF="09AF 09BC"/>
# 25 68 <char cp="09E0" na="BENGALI LETTER VOCALIC RR" InSC="Vowel_Independent"/>
# 25 69 <char cp="09E1" na="BENGALI LETTER VOCALIC LL" InSC="Vowel_Independent"/>
# 25 70 <char cp="09E2" na="BENGALI VOWEL SIGN VOCALIC L" gc="Mn" bc="NSM" jt="T" lb="CM" OAlpha="Y" Gr_Base="N" Gr_Ext="Y" IDS="N" XIDS="N" GCB="EX" WB="Extend" SB="EX" CI="Y" InSC="Vowel_Dependent" InMC="Bottom"/>
# 25 71 <char cp="09E3" na="BENGALI VOWEL SIGN VOCALIC LL" gc="Mn" bc="NSM" jt="T" lb="CM" OAlpha="Y" Gr_Base="N" Gr_Ext="Y" IDS="N" XIDS="N" GCB="EX" WB="Extend" SB="EX" CI="Y" InSC="Vowel_Dependent" InMC="Bottom"/>
# 25 71 <reserved first-cp="09E4" last-cp="09E5" age="unassigned" na="" gc="Cn" lb="XX" sc="Zzzz" scx="Zzzz" Alpha="N" Gr_Base="N" IDS="N" XIDS="N" IDC="N" XIDC="N" WB="XX" SB="XX" InSC="Other"/>
# 25 72 <char cp="09E6" na="BENGALI DIGIT ZERO" gc="Nd" nt="De" nv="0" lb="NU" scx="Beng Cakm Sylo" Alpha="N" IDS="N" XIDS="N" WB="NU" SB="NU" InSC="Number"/>
# 25 73 <char cp="09E7" na="BENGALI DIGIT ONE" gc="Nd" nt="De" nv="1" lb="NU" scx="Beng Cakm Sylo" Alpha="N" IDS="N" XIDS="N" WB="NU" SB="NU" InSC="Number"/>
# 25 74 <char cp="09E8" na="BENGALI DIGIT TWO" gc="Nd" nt="De" nv="2" lb="NU" scx="Beng Cakm Sylo" Alpha="N" IDS="N" XIDS="N" WB="NU" SB="NU" InSC="Number"/>
# 25 75 <char cp="09E9" na="BENGALI DIGIT THREE" gc="Nd" nt="De" nv="3" lb="NU" scx="Beng Cakm Sylo" Alpha="N" IDS="N" XIDS="N" WB="NU" SB="NU" InSC="Number"/>
# 25 76 <char cp="09EA" na="BENGALI DIGIT FOUR" gc="Nd" nt="De" nv="4" lb="NU" scx="Beng Cakm Sylo" Alpha="N" IDS="N" XIDS="N" WB="NU" SB="NU" InSC="Number"/>
# 25 77 <char cp="09EB" na="BENGALI DIGIT FIVE" gc="Nd" nt="De" nv="5" lb="NU" scx="Beng Cakm Sylo" Alpha="N" IDS="N" XIDS="N" WB="NU" SB="NU" InSC="Number"/>
# 25 78 <char cp="09EC" na="BENGALI DIGIT SIX" gc="Nd" nt="De" nv="6" lb="NU" scx="Beng Cakm Sylo" Alpha="N" IDS="N" XIDS="N" WB="NU" SB="NU" InSC="Number"/>
# 25 79 <char cp="09ED" na="BENGALI DIGIT SEVEN" gc="Nd" nt="De" nv="7" lb="NU" scx="Beng Cakm Sylo" Alpha="N" IDS="N" XIDS="N" WB="NU" SB="NU" InSC="Number"/>
# 25 80 <char cp="09EE" na="BENGALI DIGIT EIGHT" gc="Nd" nt="De" nv="8" lb="NU" scx="Beng Cakm Sylo" Alpha="N" IDS="N" XIDS="N" WB="NU" SB="NU" InSC="Number"/>
# 25 81 <char cp="09EF" na="BENGALI DIGIT NINE" gc="Nd" nt="De" nv="9" lb="NU" scx="Beng Cakm Sylo" Alpha="N" IDS="N" XIDS="N" WB="NU" SB="NU" InSC="Number"/>
# 25 82 <char cp="09F0" na="BENGALI LETTER RA WITH MIDDLE DIAGONAL"/>
# 25 83 <char cp="09F1" na="BENGALI LETTER RA WITH LOWER DIAGONAL" na1="BENGALI LETTER VA WITH LOWER DIAGONAL"/>
# 25 84 <char cp="09F2" na="BENGALI RUPEE MARK" gc="Sc" bc="ET" lb="PO" Alpha="N" IDS="N" XIDS="N" IDC="N" XIDC="N" WB="XX" SB="XX" InSC="Other"/>
# 25 85 <char cp="09F3" na="BENGALI RUPEE SIGN" gc="Sc" bc="ET" lb="PO" Alpha="N" IDS="N" XIDS="N" IDC="N" XIDC="N" WB="XX" SB="XX" InSC="Other"/>
# 25 86 <char cp="09F4" na="BENGALI CURRENCY NUMERATOR ONE" gc="No" nt="Nu" nv="1/16" Alpha="N" IDS="N" XIDS="N" IDC="N" XIDC="N" WB="XX" SB="XX" InSC="Other"/>
# 25 87 <char cp="09F5" na="BENGALI CURRENCY NUMERATOR TWO" gc="No" nt="Nu" nv="1/8" Alpha="N" IDS="N" XIDS="N" IDC="N" XIDC="N" WB="XX" SB="XX" InSC="Other"/>
# 25 88 <char cp="09F6" na="BENGALI CURRENCY NUMERATOR THREE" gc="No" nt="Nu" nv="3/16" Alpha="N" IDS="N" XIDS="N" IDC="N" XIDC="N" WB="XX" SB="XX" InSC="Other"/>
# 25 89 <char cp="09F7" na="BENGALI CURRENCY NUMERATOR FOUR" gc="No" nt="Nu" nv="1/4" Alpha="N" IDS="N" XIDS="N" IDC="N" XIDC="N" WB="XX" SB="XX" InSC="Other"/>
# 25 90 <char cp="09F8" na="BENGALI CURRENCY NUMERATOR ONE LESS THAN THE DENOMINATOR" gc="No" nt="Nu" nv="3/4" Alpha="N" IDS="N" XIDS="N" IDC="N" XIDC="N" WB="XX" SB="XX" InSC="Other"/>
# 25 91 <char cp="09F9" na="BENGALI CURRENCY DENOMINATOR SIXTEEN" gc="No" nt="Nu" nv="16" lb="PO" Alpha="N" IDS="N" XIDS="N" IDC="N" XIDC="N" WB="XX" SB="XX" InSC="Other"/>
# 25 92 <char cp="09FA" na="BENGALI ISSHAR" gc="So" Alpha="N" IDS="N" XIDS="N" IDC="N" XIDC="N" WB="XX" SB="XX" InSC="Other"/>
# 25 93 <char cp="09FB" age="5.2" na="BENGALI GANDA MARK" gc="Sc" bc="ET" lb="PR" Alpha="N" IDS="N" XIDS="N" IDC="N" XIDC="N" WB="XX" SB="XX" InSC="Other"/>
# 25 93 <reserved first-cp="09FC" last-cp="09FF" age="unassigned" na="" gc="Cn" lb="XX" sc="Zzzz" scx="Zzzz" Alpha="N" Gr_Base="N" IDS="N" XIDS="N" IDC="N" XIDC="N" WB="XX" SB="XX" InSC="Other"/>
# 25 93 </group>
# 296