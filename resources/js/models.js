            function dynamicdropdown(listindex) {
                document.getElementById("subcategory").length = 0;
                switch (listindex)
                {
                    case "alfa" :
                        document.getElementById("subcategory").options[0]=new Option("Select Model","");
                        document.getElementById("subcategory").options[1]=new Option("Giulia","Giulia");
                        document.getElementById("subcategory").options[2]=new Option("Stelvio","Stelvio");
                        document.getElementById("subcategory").options[3]=new Option("4C Coupe","4C Coupe");
                        document.getElementById("subcategory").options[4]=new Option("4C Spider","4C Spider");
                        break;
                    case "apollo" :
                        document.getElementById("subcategory").options[0]=new Option("Select Model","");
                        document.getElementById("subcategory").options[1]=new Option("IE","IE");
                        break;
                    case "aston" :
                        document.getElementById("subcategory").options[0]=new Option("Select Model","");
                        document.getElementById("subcategory").options[1]=new Option("DB11","DB11");
                        document.getElementById("subcategory").options[2]=new Option("DB4","DB4");
                        document.getElementById("subcategory").options[3]=new Option("DB5","DB5");
                        document.getElementById("subcategory").options[4]=new Option("DB7","DB7");
                        document.getElementById("subcategory").options[5]=new Option("DB9","DB9");
                        document.getElementById("subcategory").options[6]=new Option("DBS","DBS");
                        document.getElementById("subcategory").options[7]=new Option("MKII","MKII");
                        document.getElementById("subcategory").options[8]=new Option("Rapide","Rapide");
                        document.getElementById("subcategory").options[9]=new Option("V12","V12");
                        document.getElementById("subcategory").options[10]=new Option("V8","V8");
                        document.getElementById("subcategory").options[11]=new Option("Valkyrie","Valkyrie");
                        document.getElementById("subcategory").options[12]=new Option("Vanquish","Vanquish");
                        document.getElementById("subcategory").options[13]=new Option("Virage","Virage");
                        document.getElementById("subcategory").options[14]=new Option("Vulcan","Vulcan");
                        break;
                    case "audi" :
                        document.getElementById("subcategory").options[0]=new Option("Select Model","");
                        document.getElementById("subcategory").options[1]=new Option("A3", "A3");
                        document.getElementById("subcategory").options[2]=new Option("A4", "A4");
                        document.getElementById("subcategory").options[3]=new Option("A5", "A5");
                        document.getElementById("subcategory").options[4]=new Option("A6", "A6");
                        document.getElementById("subcategory").options[5]=new Option("A7", "A7");
                        document.getElementById("subcategory").options[6]=new Option("A8", "A8");
                        document.getElementById("subcategory").options[7]=new Option("Q3", "Q3");
                        document.getElementById("subcategory").options[8]=new Option("Q5", "Q5");
                        document.getElementById("subcategory").options[9]=new Option("Q7", "Q7");
                        document.getElementById("subcategory").options[10]=new Option("R8", "R8");
                        document.getElementById("subcategory").options[11]=new Option("RS", "RS");
                        document.getElementById("subcategory").options[12]=new Option("S3", "S3");
                        document.getElementById("subcategory").options[13]=new Option("S4", "S4");
                        document.getElementById("subcategory").options[14]=new Option("S5", "S5");
                        document.getElementById("subcategory").options[15]=new Option("S6", "S6");
                        document.getElementById("subcategory").options[16]=new Option("S7", "S7");
                        document.getElementById("subcategory").options[17]=new Option("S8", "S8");
                        document.getElementById("subcategory").options[18]=new Option("SQ5", "SQ5");
                        document.getElementById("subcategory").options[19]=new Option("TT", "TT");
                        break;
                    case "bently" :
                        document.getElementById("subcategory").options[0]=new Option("Select Model","");
                        document.getElementById("subcategory").options[1]=new Option("Arnage", "Arnage");
                        document.getElementById("subcategory").options[2]=new Option("Azure", "Azure");
                        document.getElementById("subcategory").options[3]=new Option("Bentayga", "Bentayga");
                        document.getElementById("subcategory").options[4]=new Option("Continental", "Continental");
                        document.getElementById("subcategory").options[5]=new Option("Flying Spur", "Flying Spur");
                        document.getElementById("subcategory").options[6]=new Option("Mulsanne", "Mulsanne");
                        document.getElementById("subcategory").options[7]=new Option("S4", "S4");
                        break;
                    case "bmw" :
                        document.getElementById("subcategory").options[0]=new Option("Select Model","");
                        document.getElementById("subcategory").options[1]=new Option("X1", "X1");
                        document.getElementById("subcategory").options[2]=new Option("X2", "X2");
                        document.getElementById("subcategory").options[3]=new Option("X3", "X3");
                        document.getElementById("subcategory").options[4]=new Option("X4", "X4");
                        document.getElementById("subcategory").options[5]=new Option("X5", "X5");
                        document.getElementById("subcategory").options[6]=new Option("X6", "X6");
                        document.getElementById("subcategory").options[7]=new Option("2 Series", "2 Series");
                        document.getElementById("subcategory").options[8]=new Option("3 Series", "3 Series");
                        document.getElementById("subcategory").options[9]=new Option("4 Series", "4 Series");
                        document.getElementById("subcategory").options[10]=new Option("5 Series", "5 Series");
                        document.getElementById("subcategory").options[11]=new Option("6 Series", "6 Series");
                        document.getElementById("subcategory").options[12]=new Option("7 Series", "7 Series");
                        document.getElementById("subcategory").options[13]=new Option("8 Series", "8 Series");
                        document.getElementById("subcategory").options[14]=new Option("Z4 Roadster", "Z4 Roadster");
                        document.getElementById("subcategory").options[15]=new Option("i3", "i3");
                        document.getElementById("subcategory").options[16]=new Option("i8", "i8");
                        break;
                    case "bugatti" :
                        document.getElementById("subcategory").options[0]=new Option("Select Model","");
                        document.getElementById("subcategory").options[1]=new Option("Veyron", "Veyron");
                        document.getElementById("subcategory").options[2]=new Option("Chiron", "Chiron");
                        break;
                    case "chevrolet" :
                        document.getElementById("subcategory").options[0]=new Option("Select Model","");
                        document.getElementById("subcategory").options[1]=new Option("Corvette", "Corvette");
                        break;
                    case "dodge" :
                        document.getElementById("subcategory").options[0]=new Option("Select Model","");
                        document.getElementById("subcategory").options[1]=new Option("Viper", "Viper");
                        break;
                    case "ferrari" :
                        document.getElementById("subcategory").options[0]=new Option("Select Model","");
                        document.getElementById("subcategory").options[1]=new Option("250", "250");
                        document.getElementById("subcategory").options[2]=new Option("275 GTB", "275 GTB");
                        document.getElementById("subcategory").options[3]=new Option("308", "308");
                        document.getElementById("subcategory").options[4]=new Option("328", "328");
                        document.getElementById("subcategory").options[5]=new Option("348", "348");
                        document.getElementById("subcategory").options[6]=new Option("360", "360");
                        document.getElementById("subcategory").options[7]=new Option("365", "365");
                        document.getElementById("subcategory").options[8]=new Option("456", "456");
                        document.getElementById("subcategory").options[9]=new Option("458", "458");
                        document.getElementById("subcategory").options[10]=new Option("488", "488");
                        document.getElementById("subcategory").options[11]=new Option("512", "512");
                        document.getElementById("subcategory").options[12]=new Option("550", "550");
                        document.getElementById("subcategory").options[13]=new Option("575", "575");
                        document.getElementById("subcategory").options[14]=new Option("599", "599");
                        document.getElementById("subcategory").options[15]=new Option("612 Scaglietti", "612 Scaglietti");
                        document.getElementById("subcategory").options[16]=new Option("812 Superfast", "812 Superfast");
                        document.getElementById("subcategory").options[17]=new Option("California", "California");
                        document.getElementById("subcategory").options[18]=new Option("Dino 246", "Dino 246");
                        document.getElementById("subcategory").options[19]=new Option("F12", "F12");
                        document.getElementById("subcategory").options[20]=new Option("F333 SP", "F333 SP");
                        document.getElementById("subcategory").options[21]=new Option("F355", "F355");
                        document.getElementById("subcategory").options[22]=new Option("F355 Spider", "F355 Spider");
                        document.getElementById("subcategory").options[23]=new Option("F430", "F430");
                        document.getElementById("subcategory").options[24]=new Option("FF", "FF");
                        document.getElementById("subcategory").options[25]=new Option("FXX", "FXX");
                        document.getElementById("subcategory").options[26]=new Option("GTC4Lusso", "GTC4Lusso");
                        document.getElementById("subcategory").options[27]=new Option("LaFerrari", "LaFerrari");
                        document.getElementById("subcategory").options[28]=new Option("Mondial", "Mondial");
                        document.getElementById("subcategory").options[29]=new Option("P-4", "P-4");
                        document.getElementById("subcategory").options[30]=new Option("Scuderia Spider 16M", "Scuderia Spider 16M");
                        document.getElementById("subcategory").options[31]=new Option("Testarossa", "Testarossa");
                        break;
                    case "fiskar" :
                        document.getElementById("subcategory").options[0]=new Option("Select Model","");
                        document.getElementById("subcategory").options[1]=new Option("Emotion", "Emotion");
                        document.getElementById("subcategory").options[2]=new Option("Karma", "Karma");
                        document.getElementById("subcategory").options[3]=new Option("Orbit", "Orbit");
                        break;
                    case "ford" :
                        document.getElementById("subcategory").options[0]=new Option("Select Model","");
                        document.getElementById("subcategory").options[1]=new Option("GT", "GT");
                        break;
                    case "jaguar" :
                        document.getElementById("subcategory").options[0]=new Option("Select Model","");
                        document.getElementById("subcategory").options[1]=new Option("C-Type", "C-Type");
                        document.getElementById("subcategory").options[2]=new Option("E-Type", "E-Type");
                        document.getElementById("subcategory").options[3]=new Option("E-Pace", "E-Pace");
                        document.getElementById("subcategory").options[4]=new Option("F-Pace", "F-Pace");
                        document.getElementById("subcategory").options[5]=new Option("F-Type", "F-Type");
                        document.getElementById("subcategory").options[6]=new Option("I-Pace", "I-Pace");
                        document.getElementById("subcategory").options[7]=new Option("Mark", "Mark");
                        document.getElementById("subcategory").options[8]=new Option("MK", "MK");
                        document.getElementById("subcategory").options[9]=new Option("S", "S");
                        document.getElementById("subcategory").options[10]=new Option("SS", "SS");
                        document.getElementById("subcategory").options[11]=new Option("XE", "XE");
                        document.getElementById("subcategory").options[12]=new Option("XF", "XF");
                        document.getElementById("subcategory").options[13]=new Option("XJ", "XJ");
                        document.getElementById("subcategory").options[14]=new Option("XK", "XK");
                        break;
                    case "koenigsegg" :
                        document.getElementById("subcategory").options[0]=new Option("Select Model","");
                        document.getElementById("subcategory").options[1]=new Option("CCR", "CCR");
                        document.getElementById("subcategory").options[2]=new Option("CCX", "CCX");
                        document.getElementById("subcategory").options[3]=new Option("CCXR", "CCXR");
                        document.getElementById("subcategory").options[4]=new Option("CCGT", "CCGT");
                        document.getElementById("subcategory").options[5]=new Option("Agera", "Agera");
                        document.getElementById("subcategory").options[6]=new Option("Regera", "Regera");
                        break;
                    case "lamborghini" :
                        document.getElementById("subcategory").options[0]=new Option("Select Model","");
                        document.getElementById("subcategory").options[1]=new Option("350 GT", "350 GT");
                        document.getElementById("subcategory").options[2]=new Option("Aventador", "Aventador");
                        document.getElementById("subcategory").options[3]=new Option("Centenario", "Centenario");
                        document.getElementById("subcategory").options[4]=new Option("Countach", "Countach");
                        document.getElementById("subcategory").options[5]=new Option("Diablo", "Diablo");
                        document.getElementById("subcategory").options[6]=new Option("Espada", "Espada");
                        document.getElementById("subcategory").options[7]=new Option("Gallardo", "Gallardo");
                        document.getElementById("subcategory").options[8]=new Option("Huracan", "Huracan");
                        document.getElementById("subcategory").options[9]=new Option("Islero S", "Islero S");
                        document.getElementById("subcategory").options[10]=new Option("Jalpa", "Jalpa");
                        document.getElementById("subcategory").options[11]=new Option("Jarama", "Jarama");
                        document.getElementById("subcategory").options[12]=new Option("LM002", "LM002");
                        document.getElementById("subcategory").options[13]=new Option("Murcielago", "Murcielago");
                        document.getElementById("subcategory").options[14]=new Option("Reventon", "Reventon");
                        document.getElementById("subcategory").options[15]=new Option("Sesto Elemento", "Sesto Elemento");
                        document.getElementById("subcategory").options[16]=new Option("Urraco", "Urraco");
                        document.getElementById("subcategory").options[17]=new Option("Veneno", "Veneno");
                        break;
                    case "land" :
                        document.getElementById("subcategory").options[0]=new Option("Select Model","");
                        document.getElementById("subcategory").options[1]=new Option("Defender", "Defender");
                        document.getElementById("subcategory").options[2]=new Option("Discover", "Discover");
                        document.getElementById("subcategory").options[3]=new Option("Evoque", "Evoque");
                        document.getElementById("subcategory").options[4]=new Option("LR", "LR");
                        document.getElementById("subcategory").options[5]=new Option("Range Rover", "Range Rover");
                        document.getElementById("subcategory").options[6]=new Option("Santana", "Santana");
                        break;
                    case "lexus" :
                        document.getElementById("subcategory").options[0]=new Option("Select Model","");
                        document.getElementById("subcategory").options[1]=new Option("LC", "LC");
                        break;
                    case "lotus" :
                        document.getElementById("subcategory").options[0]=new Option("Select Model","");
                        document.getElementById("subcategory").options[1]=new Option("Elise", "Elise");
                        document.getElementById("subcategory").options[2]=new Option("Evora", "Evora");
                        document.getElementById("subcategory").options[3]=new Option("Exige", "Exige");
                        break;
                    case "maserati" :
                        document.getElementById("subcategory").options[0]=new Option("Select Model","");
                        document.getElementById("subcategory").options[1]=new Option("3500", "3500");
                        document.getElementById("subcategory").options[2]=new Option("Biturbo", "Biturbo");
                        document.getElementById("subcategory").options[3]=new Option("Bora", "Bora");
                        document.getElementById("subcategory").options[4]=new Option("Ghibli", "Ghibli");
                        document.getElementById("subcategory").options[5]=new Option("GranSport", "GranSport");
                        document.getElementById("subcategory").options[6]=new Option("GranTurismo", "GranTurismo");
                        document.getElementById("subcategory").options[7]=new Option("Indy", "Indy");
                        document.getElementById("subcategory").options[8]=new Option("Khamsin", "Khamsin");
                        document.getElementById("subcategory").options[9]=new Option("Levante", "Levante");
                        document.getElementById("subcategory").options[10]=new Option("MC12", "MC12");
                        document.getElementById("subcategory").options[11]=new Option("Merak", "Merak");
                        document.getElementById("subcategory").options[12]=new Option("Mexico", "Mexico");
                        document.getElementById("subcategory").options[13]=new Option("Quattroporte", "Quattroporte");
                        break;
                    case "mclaren" :
                        document.getElementById("subcategory").options[0]=new Option("Select Model","");
                        document.getElementById("subcategory").options[1]=new Option("M6GT", "M6GT");
                        document.getElementById("subcategory").options[2]=new Option("F1", "F1");
                        document.getElementById("subcategory").options[3]=new Option("12C", "12C");
                        document.getElementById("subcategory").options[4]=new Option("650S", "650S");
                        document.getElementById("subcategory").options[5]=new Option("675LT", "675LT");
                        document.getElementById("subcategory").options[6]=new Option("540C", "540C");
                        document.getElementById("subcategory").options[7]=new Option("570GT", "570GT");
                        document.getElementById("subcategory").options[8]=new Option("570S", "570S");
                        document.getElementById("subcategory").options[9]=new Option("720s", "720s");
                        document.getElementById("subcategory").options[10]=new Option("P1", "P1");
                        document.getElementById("subcategory").options[11]=new Option("Senna", "Senna");
                        break;
                    case "mercedes" :
                        document.getElementById("subcategory").options[0]=new Option("Select Model","");
                        document.getElementById("subcategory").options[1]=new Option("BRABUS", "BRABUS");
                        document.getElementById("subcategory").options[2]=new Option("CLA", "CLA");
                        document.getElementById("subcategory").options[3]=new Option("C", "C");
                        document.getElementById("subcategory").options[4]=new Option("E", "E");
                        document.getElementById("subcategory").options[5]=new Option("S", "S");
                        document.getElementById("subcategory").options[6]=new Option("Maybach", "Maybach");
                        document.getElementById("subcategory").options[7]=new Option("CLS", "CLS");
                        document.getElementById("subcategory").options[8]=new Option("AMG GT", "AMG GT");
                        document.getElementById("subcategory").options[9]=new Option("GLC", "GLC");
                        document.getElementById("subcategory").options[10]=new Option("GLE", "GLE");
                        document.getElementById("subcategory").options[11]=new Option("GLS", "GLS");
                        document.getElementById("subcategory").options[12]=new Option("G", "G");
                        document.getElementById("subcategory").options[13]=new Option("SLC", "SLC");
                        document.getElementById("subcategory").options[14]=new Option("SL", "SL");
                        document.getElementById("subcategory").options[15]=new Option("Sterling Moss", "Sterling Moss");
                        document.getElementById("subcategory").options[16]=new Option("300SL Gullwing", "300SL Gullwing");
                        document.getElementById("subcategory").options[17]=new Option("Project One", "Project One");
                        document.getElementById("subcategory").options[18]=new Option("CLK AMG GTR", "CLK AMG GTR");
                        document.getElementById("subcategory").options[19]=new Option("SLS", "SLS");
                        document.getElementById("subcategory").options[20]=new Option("SLR", "SLR");
                        break;
                    case "pagani" :
                        document.getElementById("subcategory").options[0]=new Option("Select Model","");
                        document.getElementById("subcategory").options[1]=new Option("Zonda", "Zonda");
                        document.getElementById("subcategory").options[2]=new Option("Revolucion", "Revolucion");
                        document.getElementById("subcategory").options[3]=new Option("Huayra", "Huayra");
                        document.getElementById("subcategory").options[4]=new Option("Roadster", "Roadster");
                        document.getElementById("subcategory").options[5]=new Option("C12", "C12");
                        document.getElementById("subcategory").options[6]=new Option("S 7.3", "S 7.3");
                        document.getElementById("subcategory").options[7]=new Option("F", "F");
                        document.getElementById("subcategory").options[8]=new Option("Cinque", "Cinque");
                        break;
                    case "porsche" :
                        document.getElementById("subcategory").options[0]=new Option("Select Model","");
                        document.getElementById("subcategory").options[1]=new Option("718 Caymen", "718 Caymen");
                        document.getElementById("subcategory").options[2]=new Option("718 Boxster", "718 Boxster");
                        document.getElementById("subcategory").options[3]=new Option("918 Spyder", "918 Spyder");
                        document.getElementById("subcategory").options[4]=new Option("911", "911");
                        document.getElementById("subcategory").options[5]=new Option("911 Targa", "911 Targa");
                        document.getElementById("subcategory").options[6]=new Option("Panamera", "Panamera");
                        document.getElementById("subcategory").options[7]=new Option("Macan", "Macan");
                        document.getElementById("subcategory").options[8]=new Option("Cayenne", "Cayenne");
                        break;
                    case "rolls" :
                        document.getElementById("subcategory").options[0]=new Option("Select Model","");
                        document.getElementById("subcategory").options[1]=new Option("Corniche", "Corniche");
                        document.getElementById("subcategory").options[2]=new Option("Cullinan", "Cullinan");
                        document.getElementById("subcategory").options[3]=new Option("Dawn", "Dawn");
                        document.getElementById("subcategory").options[4]=new Option("Ghost", "Ghost");
                        document.getElementById("subcategory").options[5]=new Option("Phantom", "Phantom");
                        document.getElementById("subcategory").options[6]=new Option("Silver", "Silver");
                        document.getElementById("subcategory").options[7]=new Option("Wraith", "Wraith");
                        break;  
                    case "saleen" :
                        document.getElementById("subcategory").options[0]=new Option("Select Model","");
                        document.getElementById("subcategory").options[1]=new Option("S7", "S7");
                        document.getElementById("subcategory").options[2]=new Option("S1", "S1");
                        break;
                    case "tesla" :
                        document.getElementById("subcategory").options[0]=new Option("Select Model","");
                        document.getElementById("subcategory").options[1]=new Option("Model S", "Model S");
                        document.getElementById("subcategory").options[2]=new Option("Model X", "Model X");
                        document.getElementById("subcategory").options[3]=new Option("Model 3", "Model 3");
                        document.getElementById("subcategory").options[4]=new Option("Roadster", "Roadster");
                        break;     
                }
                return true;
            }