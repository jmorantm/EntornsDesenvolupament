# UD1 — Desenvolupament de programari

## Objectius
- Comprendre el desenvolupament de programari i tipus de software.
- Conèixer el cicle de vida: anàlisi, disseny, codificació, proves, manteniment.
- Identificar models de procés (cascada, V, espiral, prototips, àgils).

## Tipus de software
- **De sistema**: OS, drivers.
- **D'aplicació**: navegadors, suites.
- **De desenvolupament**: IDEs, compiladors, intèrprets.

## Cicle de vida (resum)
1. **Anàlisi** — especificació de requisits.
2. **Disseny** — arquitectura, dades, interfícies.
3. **Codificació** — codi font, objectes, compilació/interpretació.
4. **Proves** — unitàries, integració, sistema.
5. **Manteniment** — correctiu, perfectiu, evolutiu, adaptatiu.

## Models de desenvolupament
- **Cascada**: seqüencial, poc flexible.
- **Model en V**: verifica fases amb proves.
- **Prototips**: ràpid o evolutiu per validar requisits.
- **Espiral**: iteratiu, gestió de riscos.
- **Àgils (Scrum, Kanban)**: iteracions curtes, feedback continu.

## Recursos / exercicis
- Exercicis de preparació d'entorn i debugging.
# Pràctica: Preparació de l'entorn i Debugging amb Visual Studio Code

## Objectius
1. Configurar correctament l’entorn de desenvolupament amb **Visual Studio Code (VS Code)**.  
2. Crear i executar un projecte senzill en **Java** o **Python**.  
3. Aprendre a utilitzar el **Debugging** per identificar i corregir errors en un programa.

---

## Materials necessaris
- Ordinador amb connexió a Internet.  
- Visual Studio Code instal·lat: [https://code.visualstudio.com/](https://code.visualstudio.com/)  
- JDK (si es treballa en Java) o intèrpret de Python (si es treballa en Python).  
- Extensions de VS Code:
  - Java: **Java Extension Pack**  
  - Python: **Python** (Microsoft)

---

## Part 1: Instal·lació i configuració de VS Code

1. **Instal·lar Visual Studio Code** seguint el guia del web oficial.  
2. Obrir VS Code i instal·lar les extensions necessàries segons el llenguatge:
   - Java: `Java Extension Pack`  
   - Python: `Python`  
3. Comprovar que JDK o l’intèrpret de Python està correctament instal·lat:
   - Java: `java -version` i `javac -version` al terminal.  
   - Python: `python --version` o `python3 --version`.  

---

## Part 2: Creació d’un projecte senzill

1. Crear una nova carpeta per al projecte (ex. `PracticaDebug`).  
2. Crear un fitxer principal:
   - Java: `Main.java`  
3. Escriure el següent codi **amb un error intencionat** per practicar debugging:

**Java (`Main.java`):**
```java
public class Main {
    public static void main(String[] args) {
        int a = 5;
        int b = 0;
        int c = a / b; // Error: divisió per zero
        System.out.println(c);
    }
}
```
## Part 3: Configuració del Debugging a VS Code

1. Obre el panell de **Debug** a VS Code (icona de l’insecte a la barra lateral esquerra).

2. Crea una configuració nova:
   - **Java:** selecciona el fitxer `Main.java`.  
   - **Python:** selecciona el fitxer `main.py`.  

3. Col·loca un **breakpoint** a la línia amb l’operació que pot fallar:
   - Java: `int c = a / b`  
   - Python: `c = a / b`
## Part 4: Execució i depuració

1. Inicia la sessió de **Debug** a VS Code.

2. Observa l’execució **pas a pas**:
   - Com es comporten les variables?  
   - Quin moment provoca l’error?

3. Detecta l’error de **divisió per zero**.

4. Corregir l’error modificant la variable `b`:

**Java:**
```java
int b = 2;
```
5. Torna a executar el programa i verifica que funciona correctament.
## Part 5: Reflexió

- Quines eines del **Debug** t’han ajudat a detectar l’error?  
- Com poden els **breakpoints** ajudar en projectes més grans?  
- Quin altre tipus d’errors podries detectar amb **Debugging**?
