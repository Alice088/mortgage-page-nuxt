#### Ремарка к colors.scss:

цвета отсортированы и пронумерованы в соответствии порядка  
первоначального и приобретенного(некоторые без номера были) и названы в соответсвии с названием в фигме.

    $white: white;
    $green-range-color: #005B73;
    //это цвета которые не относиться к классам ниже или не имели названия в фигме
    
    $n1-gray-color: #545863;
    $n2-green-color: #083E4C;
    $n3-halfColor50-green-color: rgba(8, 62, 76, 0.5);
    $n4-activated-green-color: #005B73;
    $n5-label-white-gray-color: #F1F5F5;
    //n = наметкин + номер который указан в названии
    
    $vb1-dark-color: #3D4543;
    $vb2-light-gray-color: #F5F7F5;
    $vb3-halfColor70-light-gray-color: rgba(255, 255, 255, 0.7);
    $vb4-textLight-gray-color: #778478;
    //vb = Very на ботанической + мой номер чтобы не запутаться

=======================================
=======================================
### Описание к компоненту TheMortgageCalculator:
почему вообще он существует как отдельный компонент?: потенциально есть вариант, что на сайте  
может быть еще один такой допустим на страницы квартиры или еще где-то, вторая причина это 
то что я уменьшил количество кода на общей странице что повысило читабельность и красоту кода,
но сам по себе компонент является бичом моего теста потому что я имею мало опыта со сложными инпутами,
прошу прощения за глаза читающего этот кода. еще хочу добавить что он мог быть лучше в плане работы,
но я делал ставку просто на верстку

    <TheMortgageCalculator />

=======================================
=======================================

#### Модификаторы к компоненту TheButton:

принимает класс .theButton-outline чтобы убрать фон и добавить только бордер,   
принимает классы .theButton-weakBorder(0), .theButton-middleBorder(10px) чтобы изменить округление углов,

disabled настроен.

    <TheButton>
        Hello
    </TheButton>

или

    <TheButton class="theButton-outline theButton-middleBorder">
        Hello
    </TheButton>

=======================================
=======================================

#### Модификаторы к компоненту TheArrowButton:

принимает класс .theArrowButton-arrowLeft если нужно сделать стрелку влево,     
disabled настроен.

    <TheArrowButton />

или

    <TheArrowButton class="theArrowButton-arrowLeft" />

=======================================
=======================================

#### API к компоненту TheCard: 

принимает пропс imgLink: string с путем на картинку,    
имеет два слота под head(name:head) и текст(name:text)

    <TheCard img-link="/images/backgrounds/bg-1.jpg">
        <template v-slot:header>
            ипотека от 4,3%
        </template>

        <template v-slot:text>
            Выгодные условия при оформлении у банков-партнеров
        </template>
    </TheCard>

=======================================
=======================================

### Есть специальные глобальные классы для стилизации:

specialText и specialText-white нужны для стилизации особого текста,    

    <р class="specialText" > Hello! <p>

scss:

    .specialText {
        display: flex;
        width: fit-content;
        height: fit-content;
        padding: 10px;
        align-items: center;
        gap: 10px;
        flex-shrink: 0;
        border-radius: 10px;
    
        background: $n2-green-color;
        color: $white;
    
        &-white {
            background: $white;
            color: $n2-green-color;
        }
    }

=======================================
=======================================

### Описание AnimatedComponent:

Оборачивает элемент и дает анимацию когда появляется на экране,
к сожалению работает не совсем как я хотел, имеет сайд эффект, что когда
уходит из виду то тоже пропадает, и снова появляется когда на экране,
к сожалению мало опыта и времени чтобы решить проблему.