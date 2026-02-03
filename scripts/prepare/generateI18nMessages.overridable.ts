export const THEME_NAME = "login";

export const keycloakifyExtraMessages: Record<
    | "ar"
    | "az"
    | "ca"
    | "cs"
    | "da"
    | "de"
    | "el"
    | "en"
    | "es"
    | "eu"
    | "fa"
    | "fi"
    | "fr"
    | "hr"
    | "hu"
    | "it"
    | "ja"
    | "ka"
    | "kk"
    | "ko"
    | "ky"
    | "lt"
    | "lv"
    | "nl"
    | "no"
    | "pl"
    | "pt"
    | "pt-BR"
    | "ro"
    | "ru"
    | "sk"
    | "sl"
    | "sv"
    | "th"
    | "tr"
    | "uk"
    | "zh-Hans"
    | "zh-Hant",
    Record<
        | "shouldBeEqual"
        | "shouldBeDifferent"
        | "shouldMatchPattern"
        | "mustBeAnInteger"
        | "notAValidOption"
        | "selectAnOption"
        | "remove"
        | "addValue"
        | "languages"
        | "organization.select"
        | "linkIdpActionTitle"
        | "linkIdpActionMessage"
        | "passkey-doAuthenticate",
        string
    >
> = {
    en: {
        shouldBeEqual: "{0} should be equal to {1}",
        shouldBeDifferent: "{0} should be different to {1}",
        shouldMatchPattern: "Pattern should match: `/{0}/`",
        mustBeAnInteger: "Must be an integer",
        notAValidOption: "Not a valid option",
        selectAnOption: "Select an option",
        remove: "Remove",
        addValue: "Add value",
        languages: "Languages",
        "organization.select": "Select an organization to proceed:",
        linkIdpActionTitle: "Linking {0}",
        linkIdpActionMessage: "Do you want to link your account with {0}?",
        "passkey-doAuthenticate": "Sign in with Passkey"
    },
    /* spell-checker: disable */
    ar: {
        shouldBeEqual: "{0} يجب أن يكون مساويًا لـ {1}",
        shouldBeDifferent: "{0} يجب أن يكون مختلفًا عن {1}",
        shouldMatchPattern: "`/يجب أن يطابق النمط: `/{0}/",
        mustBeAnInteger: "يجب أن يكون عددًا صحيحًا",
        notAValidOption: "ليس خيارًا صالحًا",
        selectAnOption: "اختر خيارًا",
        remove: "إزالة",
        addValue: "أضف قيمة",
        languages: "اللغات",
        "organization.select": "اختر مؤسسة للمتابعة:",
        linkIdpActionTitle: "ربط {0}",
        linkIdpActionMessage: "هل تريد ربط حسابك مع {0}؟",
        "passkey-doAuthenticate": "تسجيل الدخول باستخدام مفتاح المرور"
    },
    az: {
        shouldBeEqual: "{0} {1}-ə bərabər olmalıdır",
        shouldBeDifferent: "{0} {1}-dən fərqli olmalıdır",
        shouldMatchPattern: "Şablon uyğun olmalıdır: `/{0}/`",
        mustBeAnInteger: "Tam ədəd olmalıdır",
        notAValidOption: "Etibarlı variant deyil",
        selectAnOption: "Variant seçin",
        remove: "Sil",
        addValue: "Dəyər əlavə et",
        languages: "Dillər",
        "organization.select": "Davam etmək üçün təşkilat seçin:",
        linkIdpActionTitle: "{0} ilə əlaqələndirmə",
        linkIdpActionMessage: "Hesabınızı {0} ilə əlaqələndirmək istəyirsiniz?",
        "passkey-doAuthenticate": "Passkey ilə daxil ol"
    },
    ca: {
        shouldBeEqual: "{0} hauria de ser igual a {1}",
        shouldBeDifferent: "{0} hauria de ser diferent de {1}",
        shouldMatchPattern: "El patró hauria de coincidir: `/{0}/`",
        mustBeAnInteger: "Ha de ser un enter",
        notAValidOption: "No és una opció vàlida",
        selectAnOption: "Selecciona una opció",
        remove: "Elimina",
        addValue: "Afegeix valor",
        languages: "Idiomes",
        "organization.select": "Selecciona una organització per continuar:",
        linkIdpActionTitle: "Enllaçant {0}",
        linkIdpActionMessage: "Vols enllaçar el teu compte amb {0}?",
        "passkey-doAuthenticate": "Inicia sessió amb Passkey"
    },
    cs: {
        shouldBeEqual: "{0} by měl být roven {1}",
        shouldBeDifferent: "{0} by měl být odlišný od {1}",
        shouldMatchPattern: "Vzor by měl odpovídat: `/{0}/`",
        mustBeAnInteger: "Musí být celé číslo",
        notAValidOption: "Není platná možnost",
        selectAnOption: "Vyberte možnost",
        remove: "Odstranit",
        addValue: "Přidat hodnotu",
        languages: "Jazyky",
        "organization.select": "Vyberte organizaci pro pokračování:",
        linkIdpActionTitle: "Propojení {0}",
        linkIdpActionMessage: "Chcete propojit svůj účet s {0}?",
        "passkey-doAuthenticate": "Přihlásit se pomocí přístupového klíče"
    },
    da: {
        shouldBeEqual: "{0} bør være lig med {1}",
        shouldBeDifferent: "{0} bør være forskellig fra {1}",
        shouldMatchPattern: "Mønsteret bør matche: `/{0}/`",
        mustBeAnInteger: "Skal være et heltal",
        notAValidOption: "Ikke en gyldig mulighed",
        selectAnOption: "Vælg en mulighed",
        remove: "Fjern",
        addValue: "Tilføj værdi",
        languages: "Sprog",
        "organization.select": "Vælg en organisation for at fortsætte:",
        linkIdpActionTitle: "Linker {0}",
        linkIdpActionMessage: "Vil du forbinde din konto med {0}?",
        "passkey-doAuthenticate": "Log ind med adgangsnøgle"
    },
    de: {
        shouldBeEqual: "{0} sollte gleich {1} sein",
        shouldBeDifferent: "{0} sollte sich von {1} unterscheiden",
        shouldMatchPattern: "Muster sollte übereinstimmen: `/{0}/`",
        mustBeAnInteger: "Muss eine ganze Zahl sein",
        notAValidOption: "Keine gültige Option",
        selectAnOption: "Wählen Sie eine Option",
        remove: "Entfernen",
        addValue: "Wert hinzufügen",
        languages: "Sprachen",
        "organization.select": "Wählen Sie eine Organisation, um fortzufahren:",
        linkIdpActionTitle: "Verknüpfe {0}",
        linkIdpActionMessage: "Möchten Sie Ihr Konto mit {0} verknüpfen?",
        "passkey-doAuthenticate": "Mit Passkey anmelden"
    },
    el: {
        shouldBeEqual: "Το {0} πρέπει να είναι ίσο με {1}",
        shouldBeDifferent: "Το {0} πρέπει να διαφέρει από το {1}",
        shouldMatchPattern: "Το πρότυπο πρέπει να ταιριάζει: `/{0}/`",
        mustBeAnInteger: "Πρέπει να είναι ακέραιος",
        notAValidOption: "Δεν είναι μια έγκυρη επιλογή",
        selectAnOption: "Επιλέξτε μια επιλογή",
        remove: "Αφαίρεση",
        addValue: "Προσθήκη τιμής",
        languages: "Γλώσσες",
        "organization.select": "Επιλέξτε έναν οργανισμό για να συνεχίσετε:",
        linkIdpActionTitle: "Σύνδεση {0}",
        linkIdpActionMessage: "Θέλετε να συνδέσετε τον λογαριασμό σας με {0};",
        "passkey-doAuthenticate": "Σύνδεση με κλειδί πρόσβασης"
    },
    es: {
        shouldBeEqual: "{0} debería ser igual a {1}",
        shouldBeDifferent: "{0} debería ser diferente a {1}",
        shouldMatchPattern: "El patrón debería coincidir: `/{0}/`",
        mustBeAnInteger: "Debe ser un número entero",
        notAValidOption: "No es una opción válida",
        selectAnOption: "Selecciona una opción",
        remove: "Eliminar",
        addValue: "Añadir valor",
        languages: "Idiomas",
        "organization.select": "Selecciona una organización para continuar:",
        linkIdpActionTitle: "Vinculando {0}",
        linkIdpActionMessage: "¿Quieres vincular tu cuenta con {0}?",
        "passkey-doAuthenticate": "Iniciar sesión con Passkey"
    },
    eu: {
        shouldBeEqual: "{0} {1} berdina izan behar da",
        shouldBeDifferent: "{0} {1} desberdina izan behar da",
        shouldMatchPattern: "Ereduak bat etorri behar du: `/{0}/`",
        mustBeAnInteger: "Zenbaki osoa izan behar da",
        notAValidOption: "Ez da baliozko aukera",
        selectAnOption: "Hautatu aukera bat",
        remove: "Kendu",
        addValue: "Gehitu balioa",
        languages: "Hizkuntzak",
        "organization.select": "Hautatu erakunde bat jarraitzeko:",
        linkIdpActionTitle: "{0} lotzen",
        linkIdpActionMessage: "Zure kontua {0} ekin lotu nahi duzu?",
        "passkey-doAuthenticate": "Saioa hasi Passkey-rekin"
    },
    fa: {
        shouldBeEqual: "{0} باید برابر باشد با {1}",
        shouldBeDifferent: "{0} باید متفاوت باشد از {1}",
        shouldMatchPattern: "الگو باید مطابقت داشته باشد: `/{0}/`",
        mustBeAnInteger: "باید یک عدد صحیح باشد",
        notAValidOption: "یک گزینه معتبر نیست",
        selectAnOption: "یک گزینه انتخاب کنید",
        remove: "حذف",
        addValue: "افزودن مقدار",
        languages: "زبان‌ها",
        "organization.select": "یک سازمان را برای ادامه انتخاب کنید:",
        linkIdpActionTitle: "در حال اتصال {0}",
        linkIdpActionMessage: "آیا می‌خواهید حساب خود را با {0} لینک کنید؟",
        "passkey-doAuthenticate": "ورود با کلید عبور"
    },
    fi: {
        shouldBeEqual: "{0} pitäisi olla yhtä suuri kuin {1}",
        shouldBeDifferent: "{0} pitäisi olla erilainen kuin {1}",
        shouldMatchPattern: "Mallin tulisi vastata: `/{0}/`",
        mustBeAnInteger: "On oltava kokonaisluku",
        notAValidOption: "Ei ole kelvollinen vaihtoehto",
        selectAnOption: "Valitse vaihtoehto",
        remove: "Poista",
        addValue: "Lisää arvo",
        languages: "Kielet",
        "organization.select": "Valitse organisaatio jatkaaksesi:",
        linkIdpActionTitle: "Linkitetään {0}",
        linkIdpActionMessage: "Haluatko yhdistää tilisi {0}:n kanssa?",
        "passkey-doAuthenticate": "Kirjaudu sisään passkeyllä"
    },
    fr: {
        shouldBeEqual: "{0} devrait être égal à {1}",
        shouldBeDifferent: "{0} devrait être différent de {1}",
        shouldMatchPattern: "Le motif devrait correspondre: `/{0}/`",
        mustBeAnInteger: "Doit être un entier",
        notAValidOption: "Pas une option valide",
        selectAnOption: "Sélectionnez une option",
        remove: "Supprimer",
        addValue: "Ajouter une valeur",
        languages: "Langues",
        "organization.select": "Sélectionnez une organisation pour continuer :",
        linkIdpActionTitle: "Association à {0}",
        linkIdpActionMessage: "Voulez-vous lier votre compte à {0} ?",
        "passkey-doAuthenticate": "Se connecter avec une Passkey"
    },
    hr: {
        shouldBeEqual: "{0} bi trebao biti jednak {1}",
        shouldBeDifferent: "{0} bi trebao biti različit od {1}",
        shouldMatchPattern: "Uzorak bi trebao odgovarati: `/{0}/`",
        mustBeAnInteger: "Mora biti cijeli broj",
        notAValidOption: "Nije valjana opcija",
        selectAnOption: "Odaberite opciju",
        remove: "Ukloni",
        addValue: "Dodaj vrijednost",
        languages: "Jezici",
        "organization.select": "Odaberite organizaciju za nastavak:",
        linkIdpActionTitle: "Povezivanje s {0}",
        linkIdpActionMessage: "Želite li povezati svoj račun s {0}?",
        "passkey-doAuthenticate": "Prijavite se pomoću pristupnog ključa"
    },
    hu: {
        shouldBeEqual: "{0} egyenlő kell legyen {1}-vel",
        shouldBeDifferent: "{0} különbözőnek kell lennie, mint {1}",
        shouldMatchPattern: "A mintának egyeznie kell: `/{0}/`",
        mustBeAnInteger: "Egész számnak kell lennie",
        notAValidOption: "Nem érvényes opció",
        selectAnOption: "Válasszon egy lehetőséget",
        remove: "Eltávolítás",
        addValue: "Érték hozzáadása",
        languages: "Nyelvek",
        "organization.select": "Válasszon egy szervezetet a folytatáshoz:",
        linkIdpActionTitle: "Összekapcsolás: {0}",
        linkIdpActionMessage: "Össze kívánod kapcsolni a fiókodat a(z) {0} szolgáltatással?",
        "passkey-doAuthenticate": "Bejelentkezés passkey-jel"
    },
    it: {
        shouldBeEqual: "{0} dovrebbe essere uguale a {1}",
        shouldBeDifferent: "{0} dovrebbe essere diverso da {1}",
        shouldMatchPattern: "Il modello dovrebbe corrispondere: `/{0}/`",
        mustBeAnInteger: "Deve essere un numero intero",
        notAValidOption: "Non è un'opzione valida",
        selectAnOption: "Seleziona un'opzione",
        remove: "Rimuovi",
        addValue: "Aggiungi valore",
        languages: "Lingue",
        "organization.select": "Seleziona un'organizzazione per continuare:",
        linkIdpActionTitle: "Collegamento a {0}",
        linkIdpActionMessage: "Vuoi collegare il tuo account con {0}?",
        "passkey-doAuthenticate": "Accedi con Passkey"
    },
    ja: {
        shouldBeEqual: "{0} は {1} と等しい必要があります",
        shouldBeDifferent: "{0} は {1} と異なる必要があります",
        shouldMatchPattern: "パターンは一致する必要があります: `/{0}/`",
        mustBeAnInteger: "整数である必要があります",
        notAValidOption: "有効なオプションではありません",
        selectAnOption: "オプションを選択",
        remove: "削除",
        addValue: "値を追加",
        languages: "言語",
        "organization.select": "続行する組織を選択してください:",
        linkIdpActionTitle: "{0} をリンク",
        linkIdpActionMessage: "アカウントを{0}にリンクしますか？",
        "passkey-doAuthenticate": "パスキーでサインイン"
    },
    lt: {
        shouldBeEqual: "{0} turėtų būti lygus {1}",
        shouldBeDifferent: "{0} turėtų skirtis nuo {1}",
        shouldMatchPattern: "Šablonas turėtų atitikti: `/{0}/`",
        mustBeAnInteger: "Turi būti sveikasis skaičius",
        notAValidOption: "Netinkama parinktis",
        selectAnOption: "Pasirinkite parinktį",
        remove: "Pašalinti",
        addValue: "Pridėti reikšmę",
        languages: "Kalbos",
        "organization.select": "Pasirinkite organizaciją, kad galėtumėte tęsti:",
        linkIdpActionTitle: "Prijungiama {0}",
        linkIdpActionMessage: "Ar norite susieti savo paskyrą su {0}?",
        "passkey-doAuthenticate": "Prisijunkite naudodami prieigos raktą"
    },
    lv: {
        shouldBeEqual: "{0} jābūt vienādam ar {1}",
        shouldBeDifferent: "{0} jābūt atšķirīgam no {1}",
        shouldMatchPattern: "Mustrim jāsakrīt: `/{0}/`",
        mustBeAnInteger: "Jābūt veselam skaitlim",
        notAValidOption: "Nav derīga opcija",
        selectAnOption: "Izvēlieties opciju",
        remove: "Noņemt",
        addValue: "Pievienot vērtību",
        languages: "Valodas",
        "organization.select": "Izvēlieties organizāciju, lai turpinātu:",
        linkIdpActionTitle: "Saistīšana ar {0}",
        linkIdpActionMessage: "Vai vēlaties sasaistīt savu kontu ar {0}?",
        "passkey-doAuthenticate": "Pieteikties ar piekļuves atslēgu"
    },
    nl: {
        shouldBeEqual: "{0} moet gelijk zijn aan {1}",
        shouldBeDifferent: "{0} moet verschillen van {1}",
        shouldMatchPattern: "Patroon moet overeenkomen: `/{0}/`",
        mustBeAnInteger: "Moet een geheel getal zijn",
        notAValidOption: "Geen geldige optie",
        selectAnOption: "Selecteer een optie",
        remove: "Verwijderen",
        addValue: "Waarde toevoegen",
        languages: "Talen",
        "organization.select": "Selecteer een organisatie om door te gaan:",
        linkIdpActionTitle: "Koppelen met {0}",
        linkIdpActionMessage: "Wil je je account koppelen aan {0}?",
        "passkey-doAuthenticate": "Aanmelden met passkey"
    },
    no: {
        shouldBeEqual: "{0} skal være lik {1}",
        shouldBeDifferent: "{0} skal være forskjellig fra {1}",
        shouldMatchPattern: "Mønsteret skal matche: `/{0}/`",
        mustBeAnInteger: "Må være et heltall",
        notAValidOption: "Ikke et gyldig alternativ",
        selectAnOption: "Velg et alternativ",
        remove: "Fjern",
        addValue: "Legg til verdi",
        languages: "Språk",
        "organization.select": "Velg en organisasjon for å fortsette:",
        linkIdpActionTitle: "Kobler til {0}",
        linkIdpActionMessage: "Vil du koble kontoen din til {0}?",
        "passkey-doAuthenticate": "Logg inn med passnøkkel"
    },
    pl: {
        shouldBeEqual: "{0} powinno być równe {1}",
        shouldBeDifferent: "{0} powinno być różne od {1}",
        shouldMatchPattern: "Wzór pow inien pasować: `/{0}/`",
        mustBeAnInteger: "Musi być liczbą całkowitą",
        notAValidOption: "Nieprawidłowa opcja",
        selectAnOption: "Wybierz opcję",
        remove: "Usuń",
        addValue: "Dodaj wartość",
        languages: "Języki",
        "organization.select": "Wybierz organizację, aby kontynuować:",
        linkIdpActionTitle: "Łączenie z {0}",
        linkIdpActionMessage: "Czy chcesz połączyć swoje konto z {0}?",
        "passkey-doAuthenticate": "Zaloguj się za pomocą klucza dostępu"
    },
    pt: {
        shouldBeEqual: "{0} deve ser igual a {1}",
        shouldBeDifferent: "{0} deve ser diferente de {1}",
        shouldMatchPattern: "O padrão deve corresponder: `/{0}/`",
        mustBeAnInteger: "Deve ser um número inteiro",
        notAValidOption: "Não é uma opção válida",
        selectAnOption: "Selecione uma opção",
        remove: "Remover",
        addValue: "Adicionar valor",
        languages: "Idiomas",
        "organization.select": "Selecione uma organização para continuar:",
        linkIdpActionTitle: "Associando {0}",
        linkIdpActionMessage: "Deseja associar sua conta a {0}?",
        "passkey-doAuthenticate": "Iniciar sessão com chave de acesso"
    },
    "pt-BR": {
        shouldBeEqual: "{0} deve ser igual a {1}",
        shouldBeDifferent: "{0} deve ser diferente de {1}",
        shouldMatchPattern: "O padrão deve corresponder: `/{0}/`",
        mustBeAnInteger: "Deve ser um número inteiro",
        notAValidOption: "Não é uma opção válida",
        selectAnOption: "Selecione uma opção",
        remove: "Remover",
        addValue: "Adicionar valor",
        languages: "Idiomas",
        "organization.select": "Selecione uma organização para continuar:",
        linkIdpActionTitle: "Associando {0}",
        linkIdpActionMessage: "Deseja vincular sua conta ao {0}?",
        "passkey-doAuthenticate": "Entrar com chave de acesso"
    },
    ro: {
        shouldBeEqual: "{0} ar trebui să fie egal cu {1}",
        shouldBeDifferent: "{0} ar trebui să fie diferit de {1}",
        shouldMatchPattern: "Modelul ar trebui să se potrivească: `/{0}/`",
        mustBeAnInteger: "Trebuie să fie un număr întreg",
        notAValidOption: "Nu este o opțiune validă",
        selectAnOption: "Selectați o opțiune",
        remove: "Elimină",
        addValue: "Adaugă valoare",
        languages: "Limbi",
        "organization.select": "Selectați o organizație pentru a continua:",
        linkIdpActionTitle: "Asociere cu {0}",
        linkIdpActionMessage: "Doriți să vă asociați contul cu {0}?",
        "passkey-doAuthenticate": "Autentificare cu cheie de acces"
    },
    ru: {
        shouldBeEqual: "{0} должно быть равно {1}",
        shouldBeDifferent: "{0} должно отличаться от {1}",
        shouldMatchPattern: "Шаблон должен соответствовать: `/{0}/`",
        mustBeAnInteger: "Должно быть целым числом",
        notAValidOption: "Недопустимый вариант",
        selectAnOption: "Выберите вариант",
        remove: "Удалить",
        addValue: "Добавить значение",
        languages: "Языки",
        "organization.select": "Выберите организацию, чтобы продолжить:",
        linkIdpActionTitle: "Связать с {0}",
        linkIdpActionMessage: "Хотите связать свою учетную запись с {0}?",
        "passkey-doAuthenticate": "Войти с помощью Passkey"
    },
    sk: {
        shouldBeEqual: "{0} by mal byť rovnaký ako {1}",
        shouldBeDifferent: "{0} by mal byť odlišný od {1}",
        shouldMatchPattern: "Vzor by mal zodpovedať: `/{0}/`",
        mustBeAnInteger: "Musí byť celé číslo",
        notAValidOption: "Nie je platná možnosť",
        selectAnOption: "Vyberte možnosť",
        remove: "Odstrániť",
        addValue: "Pridať hodnotu",
        languages: "Jazyky",
        "organization.select": "Vyberte organizáciu, aby ste pokračovali:",
        linkIdpActionTitle: "Prepájanie {0}",
        linkIdpActionMessage: "Chcete prepojiť svoj účet s {0}?",
        "passkey-doAuthenticate": "Prihlásiť sa pomocou prístupového kľúča"
    },
    sl: {
        shouldBeEqual: "{0} bi moral biti enak {1}",
        shouldBeDifferent: "{0} bi moral biti različen od {1}",
        shouldMatchPattern: "Vzorec se mora ujemati: `/{0}/`",
        mustBeAnInteger: "Mora biti celo število",
        notAValidOption: "Ni veljavna možnost",
        selectAnOption: "Izberite možnost",
        remove: "Odstrani",
        addValue: "Dodaj vrednost",
        languages: "Jeziki",
        "organization.select": "Izberite organizacijo za nadaljevanje:",
        linkIdpActionTitle: "Povezovanje {0}",
        linkIdpActionMessage: "Ali želite povezati svoj račun z {0}?",
        "passkey-doAuthenticate": "Prijava s ključem za dostop"
    },
    sv: {
        shouldBeEqual: "{0} bör vara lika med {1}",
        shouldBeDifferent: "{0} bör vara annorlunda än {1}",
        shouldMatchPattern: "Mönstret bör matcha: `/{0}/`",
        mustBeAnInteger: "Måste vara ett heltal",
        notAValidOption: "Inte ett giltigt alternativ",
        selectAnOption: "Välj ett alternativ",
        remove: "Ta bort",
        addValue: "Lägg till värde",
        languages: "Språk",
        "organization.select": "Välj en organisation för att fortsätta:",
        linkIdpActionTitle: "Länkar {0}",
        linkIdpActionMessage: "Vill du länka ditt konto med {0}?",
        "passkey-doAuthenticate": "Logga in med passnyckel"
    },
    th: {
        shouldBeEqual: "{0} ควรเท่ากับ {1}",
        shouldBeDifferent: "{0} ควรแตกต่างจาก {1}",
        shouldMatchPattern: "รูปแบบควรตรงกับ: `/{0}/`",
        mustBeAnInteger: "ต้องเป็นจำนวนเต็ม",
        notAValidOption: "ไม่ใช่ตัวเลือกที่ถูกต้อง",
        selectAnOption: "เลือกตัวเลือก",
        remove: "ลบ",
        addValue: "เพิ่มค่า",
        languages: "ภาษา",
        "organization.select": "เลือกองค์กรเพื่อดำเนินการต่อ:",
        linkIdpActionTitle: "กำลังเชื่อมต่อ {0}",
        linkIdpActionMessage: "คุณต้องการเชื่อมบัญชีของคุณกับ {0} หรือไม่?",
        "passkey-doAuthenticate": "ลงชื่อเข้าใช้ด้วย Passkey"
    },
    tr: {
        shouldBeEqual: "{0} {1} eşit olmalıdır",
        shouldBeDifferent: "{0} {1} farklı olmalıdır",
        shouldMatchPattern: "Desen eşleşmelidir: `/{0}/`",
        mustBeAnInteger: "Tam sayı olmalıdır",
        notAValidOption: "Geçerli bir seçenek değil",
        selectAnOption: "Bir seçenek seçin",
        remove: "Kaldır",
        addValue: "Değer ekle",
        languages: "Diller",
        "organization.select": "Devam etmek için bir organizasyon seçin:",
        linkIdpActionTitle: "Bağlanıyor: {0}",
        linkIdpActionMessage: "Hesabınızı {0} ile bağlamak ister misiniz?",
        "passkey-doAuthenticate": "Geçiş anahtarıyla oturum aç"
    },
    uk: {
        shouldBeEqual: "{0} повинно бути рівним {1}",
        shouldBeDifferent: "{0} повинно відрізнятися від {1}",
        shouldMatchPattern: "Шаблон повинен відповідати: `/{0}/`",
        mustBeAnInteger: "Повинно бути цілим числом",
        notAValidOption: "Не є дійсною опцією",
        selectAnOption: "Виберіть опцію",
        remove: "Видалити",
        addValue: "Додати значення",
        languages: "Мови",
        "organization.select": "Виберіть організацію, щоб продовжити:",
        linkIdpActionTitle: "Зв'язування з {0}",
        linkIdpActionMessage: "Бажаєте прив'язати свій обліковий запис до {0}?",
        "passkey-doAuthenticate": "Увійти за допомогою ключа доступу"
    },
    ka: {
        shouldBeEqual: "{0} უნდა იყოს ტოლი {1}-სთვის",
        shouldBeDifferent: "{0} უნდა იყოს სხვა {1}-სთვის",
        shouldMatchPattern: "შაბლონს უნდა ემთხვევა: `/{0}/`",
        mustBeAnInteger: "უნდა იყოს მთელი რიცხვი",
        notAValidOption: "არასწორი ვარიანტი",
        selectAnOption: "აირჩიეთ ვარიანტი",
        remove: "წაშალეთ",
        addValue: "დაამატეთ მნიშვნელობა",
        languages: "ენები",
        "organization.select": "აირჩიეთ ორგანიზაცია გაგრძელებისთვის:",
        linkIdpActionTitle: "კავშირის დამყარება {0}",
        linkIdpActionMessage: "გსურთ თქვენი ანგარიშის {0}-თან დაკავშირება?",
        "passkey-doAuthenticate": "Passkey-ით შესვლა"
    },
    kk: {
        shouldBeEqual: "{0} {1}-ге тең болуы керек",
        shouldBeDifferent: "{0} {1}-ден өзгеше болуы керек",
        shouldMatchPattern: "Үлгі сәйкес келуі керек: `/{0}/`",
        mustBeAnInteger: "Бүтін сан болуы керек",
        notAValidOption: "Жарамды нұсқа емес",
        selectAnOption: "Нұсқаны таңдаңыз",
        remove: "Жою",
        addValue: "Мән қосу",
        languages: "Тілдер",
        "organization.select": "Жалғастыру үшін ұйымды таңдаңыз:",
        linkIdpActionTitle: "{0} байланыстыру",
        linkIdpActionMessage: "Тіркелгіңізді {0} байланыстырғыңыз келе ме?",
        "passkey-doAuthenticate": "Passkey арқылы кіру"
    },
    ko: {
        shouldBeEqual: "{0}은(는) {1}과(와) 같아야 합니다",
        shouldBeDifferent: "{0}은(는) {1}과(와) 달라야 합니다",
        shouldMatchPattern: "패턴이 일치해야 합니다: `/{0}/`",
        mustBeAnInteger: "정수여야 합니다",
        notAValidOption: "유효한 옵션이 아닙니다",
        selectAnOption: "옵션을 선택하세요",
        remove: "제거",
        addValue: "값 추가",
        languages: "언어",
        "organization.select": "계속하려면 조직을 선택하세요:",
        linkIdpActionTitle: "{0} 연결",
        linkIdpActionMessage: "계정을 {0}에 연결하시겠습니까?",
        "passkey-doAuthenticate": "패스키로 로그인"
    },
    ky: {
        shouldBeEqual: "{0} {1} менен барабар болушу керек",
        shouldBeDifferent: "{0} {1} менен айырмаланышы керек",
        shouldMatchPattern: "Үлгү дал келиши керек: `/{0}/`",
        mustBeAnInteger: "Бүтүн сан болушу керек",
        notAValidOption: "Жарактуу вариант эмес",
        selectAnOption: "Вариантты тандаңыз",
        remove: "Өчүрүү",
        addValue: "Маани кошуу",
        languages: "Тилдер",
        "organization.select": "Улантуу үчүн уюмду тандаңыз:",
        linkIdpActionTitle: "{0} байланыштыруу",
        linkIdpActionMessage: "Аккаунтуңузду {0} менен байланыштыргыңыз келеби?",
        "passkey-doAuthenticate": "Passkey менен кирүү"
    },
    "zh-Hans": {
        shouldBeEqual: "{0} 应该等于 {1}",
        shouldBeDifferent: "{0} 应该不同于 {1}",
        shouldMatchPattern: "模式应匹配: `/{0}/`",
        mustBeAnInteger: "必须是整数",
        notAValidOption: "不是有效选项",
        selectAnOption: "选择一个选项",
        remove: "移除",
        addValue: "添加值",
        languages: "语言",
        "organization.select": "选择一个组织以继续:",
        linkIdpActionTitle: "正在关联 {0}",
        linkIdpActionMessage: "是否将您的账户与 {0} 关联？",
        "passkey-doAuthenticate": "使用通行密钥登录"
    },
    "zh-Hant": {
        shouldBeEqual: "{0} 應該等於 {1}",
        shouldBeDifferent: "{0} 應該不同於 {1}",
        shouldMatchPattern: "模式應匹配: `/{0}/`",
        mustBeAnInteger: "必須是整數",
        notAValidOption: "不是有效選項",
        selectAnOption: "選擇一個選項",
        remove: "移除",
        addValue: "添加值",
        languages: "語言",
        "organization.select": "選擇一個組織以繼續:",
        linkIdpActionTitle: "正在連結 {0}",
        linkIdpActionMessage: "是否要將您的帳戶與 {0} 連結？",
        "passkey-doAuthenticate": "使用通行金鑰登入"
    }
    /* spell-checker: enable */
};
