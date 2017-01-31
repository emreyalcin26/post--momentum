/*

Render the Polynomial fitting widget

*/
function renderPolyFit(divin) {

  /* 
    Data on eigenvectors 

    xv - x values (\xi in paper)
    yv - y values (d_i in paper)
    U - eigenvectors
    Lambda - eigenvalues
  */
  var xv     = [-1.03,-1.015,-1.0,-0.985,-0.97,-0.53,-0.515,-0.5,-0.485,-0.47,-0.03,-0.015,0.0,0.015,0.03,0.47,0.485,0.5,0.515,0.53,0.97,0.985,1.0,1.015,1.03]
  var yv     = [-1.0,-0.7,-0.4,-0.7,-1.0,1.0,1.3,1.6,1.3,1.0,-1.0,-0.7,-0.4,-0.7,-1.0,1.0,1.3,1.6,1.3,1.0,-1.0,-0.7,-0.4,-0.7,-1.0]
  var U      = [[2.06186588156784e-9,3.06006167601593e-7,-5.488131559266951e-6,-0.00040205446762207333,0.0011668961011622437,0.005386812421366475,-0.017727223313612657,-0.024482837843055535,0.10916406317967017,0.030328104117850484,-0.33573824129803503,0.07812027317620097,0.5237628604059514,-0.23441068608634277,-0.3358541434375494,0.07744366829581537,-0.07647313844882163,0.3555629891847462,0.1771202610792054,-0.4650879324882908,0.00945500839580404,0.17497204660404334,-0.08289335968705895,0.023743471421831776,0.02802250367863921,-0.021174162531701315],[-1.460499432795693e-9,2.708870943817489e-7,3.694626965683562e-6,-0.0003579404773749973,-0.0005710206059862561,0.005829499450894084,0.007731561858915659,-0.03820442772577913,-0.039767818298837035,0.12903664841868773,0.08468199454749382,-0.24197197769573578,-0.031606902518448395,0.25643714103054965,-0.10975854063815832,-0.15489722503573686,-0.013574855220628852,0.07096305978804321,0.46523479018247593,-0.05210971932374986,-0.6602303641909278,0.03405521257261558,0.37894428854930523,-0.00878054298796192,-0.08108682743344964,0.0],[-5.295244670079639e-10,-3.0059930755912905e-7,1.5021483911581858e-6,0.00039347924110957113,-0.0004213086496335869,-0.0049596475890125976,0.006424768832552672,0.019650409968814543,-0.039094854815265784,-0.008570745948096687,0.11599020641075182,-0.11603183786825508,-0.16081334646087894,0.2400971250162071,0.040316680002175205,-0.09768130154409693,0.1656077027106485,-0.013369577206554576,-0.209164812360791,-0.35015745972457213,0.08932906213205867,0.676835649764708,-0.0030966862259420025,-0.4526904752134206,-0.005078913555955966,0.10648468399807526],[-6.035423618179015e-10,7.22565672838477e-7,1.4509601199311812e-6,-0.0009507482146264166,-0.00013657686844497694,0.01413400765910602,0.0019450632167152494,-0.07898226720317886,-0.011804763771601492,0.19159858386112213,0.03761946182585896,-0.11484568446421539,-0.07029808963402055,-0.3524036468404033,0.09271369362622639,0.7235492338430954,-0.11628657207825407,-0.429934731151513,0.14107141888893177,-0.08290849521385832,-0.12159209912455578,0.1854784729276522,0.05828245740872958,-0.054735450514753196,-0.011515443694267158,0.0],[-9.077893374270162e-10,-4.4984142917714133e-7,2.2413539580716974e-6,0.0005936791821271368,-0.0002844280020796116,-0.009636129607432872,0.004675331329602757,0.06248532238008512,-0.033741488419529134,-0.2045833214250075,0.1341119450804681,0.3480796677323836,-0.32059902237007215,-0.25023386331353337,0.4777816622443722,-0.09291751590724553,-0.4418988551870654,0.31202999259760317,0.23840127670649944,-0.23057410475240792,-0.05986768690418015,0.07241350433600992,-0.0012972722561237534,-0.007656780181213787,0.0027162975888267655,0.0],[1.1458860658325763e-9,5.376157911099e-7,-3.322680958765047e-6,-0.0007099150455328444,0.0010058932814920412,0.01146162264167814,-0.014591082450807718,-0.07395289294562239,0.08106678382034055,0.24213963048017048,-0.1990060345648993,-0.4228029323563688,0.14231294859227187,0.36553675605783853,0.265138578645578,-0.08067605565315568,-0.5397138491080171,-0.08797913453078905,0.19265752974045017,0.03972253476149533,0.26367836170777,0.016914885328371276,-0.26023955644552554,-0.009655038283878075,0.06769374998085571,0.0],[-8.24349257990776e-10,1.4127156272020594e-6,2.3303957687673615e-6,-0.001856302933555799,-0.0006456012458059758,0.02727840929732575,0.009868513096557254,-0.1514186262347898,-0.06038790029473074,0.37938202937239884,0.18164452417032548,-0.36622879162949085,-0.2635061927458932,-0.047902298937428194,0.10662819689511019,0.10834510477811085,0.17974827944455535,0.39431742168911926,-0.2430364358886796,-0.37975412252878554,0.08691602903762838,-0.19788976062681748,0.013385745725313161,0.34239279961583424,-0.010617488296943839,-0.10666727916478536],[-4.862385970842062e-7,-1.0145422226138128e-9,0.0010999710643635836,1.15027149266289e-6,-0.018958747700371828,-1.69316049931783e-5,0.12555461581718766,9.71222639073976e-5,-0.3904172771936093,-0.00027164509578710816,0.5231141808814477,0.0003763485775067533,-0.05385531297884574,-0.00019299602614444598,-0.40835429904847864,-0.00015779731080245882,-0.02781813047934878,0.000340378432726586,0.3746192934905871,-0.00019963252619298322,0.15222751745991173,-6.489640184982604e-5,-0.4431030427923318,0.00013543751836148782,0.1658921781362745,-4.6537275779131714e-5],[-1.4323731703622274e-10,5.422477050106807e-6,3.223112276508625e-7,-0.004800639550695316,-3.758113822658378e-6,0.06060439845839855,1.0564237341147772e-5,-0.26934471932528387,3.206907854155546e-5,0.4450593747385235,-0.00023214655327767115,-0.02194257294253312,0.00043593765379479636,-0.39616961042092963,-0.00019623523995282314,-0.15928996648388002,-0.00034162750720562716,0.28254716561357135,0.00045026190698292163,0.3733645607001767,-0.00012944003898275708,-0.052411586509312186,-5.241267022653476e-5,-0.5080915083638213,2.6465054447505354e-5,0.2504714179254985],[-1.9397471031434524e-6,-3.902751205786002e-10,0.004372284543781454,2.109841484597191e-7,-0.05970503290295494,-2.4153330527027134e-6,0.2902386690569553,9.146760907576183e-6,-0.5532292152002194,-9.009299365520562e-6,0.17688445354169788,-1.7280202199100522e-5,0.39647641725311156,3.209408053005192e-5,0.04594898667505423,8.194266676025371e-7,-0.3111438058541645,-1.0043149161531595e-5,-0.28832754180741244,-1.3827385717868346e-5,0.10358798103014003,-4.713132708736301e-6,0.4182724323431077,2.6972587112913948e-5,-0.22337554575448332,-1.1955014996144353e-5],[1.4215888654856407e-12,-0.00010767907524537408,-3.254809651793198e-9,0.023841917488192466,5.764183873926117e-8,-0.2153070892091814,-3.4052386910193077e-7,0.5813346226301743,7.714733303489228e-7,-0.28573959696839496,-4.356456541416079e-7,-0.411542284837693,-1.9968371222242293e-7,-0.03089267148981724,-2.257604199978486e-7,0.28419303323850426,-3.1818538264868403e-7,0.2967865100291702,1.7784747031563392e-6,0.055057441401016996,-7.920608354766195e-7,-0.23579223203796276,-7.498597605283003e-7,-0.28953247475023325,4.573871983382105e-7,0.22770523368209672],[-1.0275571382311224e-5,2.3421309461884352e-11,0.02270968555019308,-1.0056596994979743e-9,-0.21227895396978566,9.99779624497665e-10,0.586214659149432,3.890962747406685e-8,-0.30936373584311794,-1.1775776878086193e-7,-0.40417255199497326,-2.6742617808188768e-8,-0.011421410794075194,1.510938831726216e-7,0.29071988598786386,1.830051484312678e-7,0.2863358080587159,8.748400269487089e-8,0.04089673576761123,-8.905744540849136e-7,-0.23743763577042104,5.2172537057249e-7,-0.2767575181379669,2.366089169175689e-7,0.22457142049182732,-1.83771555022811e-7],[1.5473394394714497e-13,0.007109346164093598,-2.780173088939442e-10,-0.09489924985400655,2.156794129811822e-9,0.38521054137543587,-3.867631607595581e-9,-0.4275397457181412,-2.2193341082808084e-9,-0.26449787045403217,4.244187433504257e-9,0.1334791199633501,-2.6497705735936422e-9,0.34284941435519417,9.33553355911645e-9,0.29007360049032804,6.142176645021534e-11,0.0580542844802502,-7.377761124644713e-9,-0.21308066051219565,-1.4890617056165716e-9,-0.3634239345015248,-1.4094925991358687e-9,-0.22551354835543494,3.4942222171263637e-9,0.3722834889724369],[1.7663793788504705e-5,-7.910488056520658e-11,-0.030421561562277863,1.0342883877573053e-9,0.23542912579947578,-4.234647845363864e-9,-0.4266311168404683,5.388320735550979e-9,-0.18623577454572218,9.6757155533891e-10,0.205422502746354,-2.2032099044409266e-9,0.374412734810478,-6.69203815235078e-10,0.2792615815760186,-3.0775400428773083e-9,0.017800604610479265,2.7311606032309754e-9,-0.26359248677462216,-5.415478593340239e-9,-0.4023561299857617,4.998588820637195e-9,-0.22972519338435715,5.728070351374015e-9,0.4267522342529727,-5.169763511086364e-9],[-2.674399797841902e-14,-0.03244677999323731,2.4732561997139646e-11,0.2908754719575972,-1.782564537188714e-10,-0.6631351909863634,3.237963886345837e-10,-0.0072285861957740415,-7.263517227323441e-12,0.31180650531607884,1.6735595159007984e-10,0.3207252026129718,-1.1031978908095978e-9,0.18257395366160228,7.866120644206412e-10,0.0008351561952068632,3.471952385289693e-10,-0.160328932263062,-7.14221153027494e-10,-0.25280935614232813,4.5801988978612983e-10,-0.23382556255894704,2.2498149754499024e-12,-0.06183670996586338,-1.0706421860184889e-10,0.30495921764955],[-0.0004159903823526488,2.585001769207681e-12,0.15371201098596757,-1.5731336763865154e-11,-0.6762476678807597,1.6465138348019454e-11,0.17141464184882874,2.2768655048096693e-11,0.4168849442750447,-4.910048734476053e-12,0.30087981095821625,-1.9831837462476695e-11,0.08937164975961469,-2.6753447363352055e-11,-0.09724288168796422,-6.796343146766686e-12,-0.21325768631061287,1.835578911091318e-11,-0.24124689369021635,1.1652082076984982e-11,-0.17312347836699754,2.5801291658744674e-11,-0.003498043650008615,-1.5751747128867066e-11,0.27248943116042035,-7.880145148203003e-12],[-6.1857792164115185e-15,-0.15194006493470488,1.8013311481761098e-12,0.6799562133597421,-8.611949788657982e-12,-0.17492966451219297,5.696388104268636e-12,-0.4011750881834219,3.2527492685265595e-12,-0.302663911954921,-2.6374949250163953e-12,-0.1179194006206635,-1.0003278233628147e-12,0.05189130048143827,6.276147203909038e-12,0.17030282734289842,-2.5885711781961375e-12,0.2246288327762004,1.285384095340267e-12,0.20993475305029083,2.051497817738682e-13,0.1235347949001642,-1.1537239206884006e-11,-0.036777412827947276,7.885234132309904e-12,-0.2732793447528244],[0.003087981094971547,-3.462155046691484e-13,-0.15691919480504898,1.3285954026811438e-12,0.45735651912247555,9.296196704868388e-14,0.3208512610565557,3.391062852753714e-13,0.07694576181496385,-8.470930521598862e-13,-0.13128913806549627,-9.470619738318289e-13,-0.2723261257943911,-2.9706633839344036e-13,-0.339031020687261,1.8479506603858108e-13,-0.32935768266749493,9.434120151752268e-14,-0.24211156481327303,-9.133527267835007e-13,-0.07603022635234381,6.483424908054758e-13,0.1704155995516477,9.872380690723048e-13,0.49906783979456915,-3.5339557489325433e-13],[4.672844240465278e-15,0.14400455579294147,-1.966592873842331e-13,-0.47737355455932506,6.155135530026088e-13,-0.3185331083958992,1.0559874409256977e-13,-0.08857880950999437,2.8412783913141826e-13,0.10001580363861734,-1.2370002728289028e-14,0.23171987539681674,-4.750615401223206e-13,0.3056410608176086,-2.827525987012844e-13,0.32203848402122737,-3.574509331872974e-13,0.2806998375473624,-2.080091032590092e-13,0.18097174539828156,-1.742168527206406e-13,0.021875769451921614,-3.571311360681043e-13,-0.19783733167973788,1.030231455700914e-12,-0.47967050698685315],[0.1291294761132742,-3.8147608237664937e-16,-0.8281241023423592,-2.62837164432401e-15,0.05829548281924387,3.835139718227963e-15,0.24934815388958048,-3.433792794703668e-15,0.26068632377407047,7.551055486394634e-15,0.22428598423346024,3.96242184421345e-15,0.1739135037607892,2.2948971921273744e-15,0.11815779287116408,5.000389327792604e-15,0.05910644677066036,-1.5543122344752192e-15,-0.002847699647806054,-3.0281332996651145e-14,-0.06776222523516633,-3.677613769070831e-15,-0.13582149036625338,1.3766765505351941e-14,-0.2072524392205875,5.700800518667339e-15],[2.6080729838091594e-17,-0.5994542391621437,1.5967093252487288e-15,0.20584631614278134,-2.6842467337022425e-15,0.35450789971772045,-3.3950446904329753e-16,0.3386636153192767,-6.4084309582429e-16,0.28089578404171134,-3.1678299051624906e-16,0.21190473499592793,4.438711848274384e-16,0.1393048525193272,8.645890663086005e-16,0.06486650503491269,-5.456163185954044e-16,-0.011132353234116779,2.229864740537042e-15,-0.08880069001717875,1.3441739526896917e-16,-0.1683521128572496,3.118834767739769e-16,-0.25003279734090694,-1.1657341758564144e-15,-0.33410346432645094],[-0.201842462985633,2.633405815312111e-16,0.4269425708865383,-1.5564902309913744e-16,0.4018528318025327,7.522474314044805e-16,0.33458746811594786,-5.605457449737285e-17,0.2567296495291629,5.70754592088815e-16,0.1757848550844433,8.779388406923506e-16,0.09341497743956641,1.0531972676141929e-15,0.0098389954943938,-1.6565879997922893e-16,-0.07508545604513626,-7.494005416219807e-16,-0.1615949297980116,-1.2212453270876722e-15,-0.24995423975148293,-1.8041124150158794e-15,-0.3404406147257427,8.326672684688674e-17,-0.43334041562658193,9.3150779529687e-16],[2.676192807518531e-16,0.7299975804124241,-3.5819013374806885e-16,0.3327786463601116,-2.646244106960278e-16,0.19753556965590524,-4.661812811937071e-16,0.12790031613963698,-1.1114397387475049e-18,0.07462634981211028,-1.5850635825750553e-17,0.02516902514555093,1.0500965760562532e-16,-0.02377285118240315,-1.365325559934363e-16,-0.07315742414427591,-2.4176853922810626e-16,-0.12334648900598541,1.937231434326873e-16,-0.17455099639184996,7.742089239822158e-17,-0.22694574731511558,1.55235401092298e-16,-0.2806994206525462,6.106226635438361e-16,-0.33598279751563276],[0.9300191110659763,-2.4708358739086182e-17,0.13196233521014553,-2.0913580579782325e-16,0.0013720765755321034,3.0450253184573115e-16,-0.03969048045600429,-1.0108440486174501e-17,-0.05844608470804107,-1.637250788749355e-16,-0.07172484428508367,-1.999873753223336e-16,-0.08379906261019913,-7.312247488533573e-17,-0.09578094301640977,4.425652820549747e-17,-0.10798240220727531,-1.3877787807814457e-17,-0.12051191574961172,1.457167719820518e-16,-0.13342659462756087,5.551115123125783e-17,-0.14677127054409606,4.163336342344337e-17,-0.16058868336520055,9.828426291247608e-17],[0.2786394489117063,-9.656448261586694e-16,0.2545661215614611,-9.320806078282025e-16,0.2533997153127304,-1.0738815549166992e-15,0.2560419055752778,-1.0918953171998632e-15,0.260003717196858,-1.074086473290914e-15,0.26467103413330917,-1.0156113182370496e-15,0.2698993456369693,-1.0097932302926232e-15,0.2756637516507104,-9.977699699803448e-16,0.2819709433558114,-1.0408340855860843e-15,0.28883694388532055,-1.4849232954361469e-15,0.29628147664281573,-1.1934897514720433e-15,0.3043265705608243,-1.1102230246251565e-15,0.31299625575463175,-1.29340117213359e-15],[-1.0941021251991154e-15,-0.2506625308234037,-1.009413008322327e-15,-0.24989630286477446,-1.0014247420443235e-15,-0.2526240998359238,-1.012242293188591e-15,-0.25658803445711953,-1.0256647205795681e-15,-0.2612317316062542,-1.0505776122664203e-15,-0.2664251861694972,-1.0632869029163254e-15,-0.27214710348947835,-1.0935915666327845e-15,-0.27840500170984983,-1.1128967477676548e-15,-0.2852150067449768,-1.1400716045033721e-15,-0.2925967435153777,-1.172824706133269e-15,-0.3005720748979802,-1.2075200549888543e-15,-0.30916483142823475,-1.4432899320127035e-15,-0.3184008013246048]]
  var Lambda = [1.3755582416464191e-17,1.6063976209359447e-16,2.426438517244846e-15,3.1074189977858312e-15,4.290802660187027e-15,4.299982194799964e-15,2.110037405960197e-14,1.877655376915522e-12,1.3729203117586531e-11,2.8344114218541463e-11,1.1668471647365205e-9,4.821984343598505e-9,4.699713303379428e-7,6.592723177053181e-7,3.929255594452594e-6,6.962761119723227e-5,0.0003598551668349393,0.003412395913368736,0.005884524410423084,0.14030731674664018,1.108432464089535,2.0880594992781787,4.438536420217691,15.062673773116444,153.0700529566374,155.13711253535496]

  /* 
    Create Vandermonde matrix of size x and order degree 
  */
  function vandermonde(x, degree){
    A = zeros2D(x.length,degree + 1)
    for (var i = 0; i < x.length; i ++){
      for (var j = 0; j < degree + 1; j ++) {
        A[i][j] = Math.pow(x[i],j)
      }
    }
    return A 
  }

  /* 
    Evaluate a 1D polynomial 
    w[0]x[0] + ... + w[k]x[k], k = w.length
  */
  function poly(w,x) {
    s = 0
    for (var i = 0; i < w.length; i++) { s = s + w[i]*Math.pow(x,i) }
    return s
  }

  /* 
    Evaluates the polynomial in range [-1.1, 1.1] at 1800 intervals
  */
  function evalPoly(w) {
    var data = []
    for (var i = -900; i < 900; i++) {
      data.push([i/800, 1*poly(w, i/800)])
    }
    return data
  }

  // Linear regression - minimize ||Ax - b||^2. Notation is different in article.
  var A = vandermonde(xv, 25)
  var b = numeric.dot(numeric.transpose(A), yv)
  var Ub = numeric.dot(U,b) // xi in paper

  /*
    We can see the progress of the iterates for the momentum iterations too.
  */
  // var iterf = geniterMomentum(U, Lambda, b, 1/320, 0.999999)
  // var iter = function(k) { return iterf(k)[1] }

  /* 
    iter(100) gets the weights of w for the 100th iteration.
    Uses Linear Algebra magic!
  */
  var iter = geniter(U, Lambda, b, 1/320)
  var w = iter(100) // initial weights, to start everything off

  /**************************************************************************
    START VISUALIZATION 
  ***************************************************************************/

  var width = 920
  var height = 155
  var svg = divin
    .style("display", "block")
    .style("margin-left","auto")
    .style("margin-right","auto")
    .style("width", width+"px")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("border", "black solid 1px")
      .style("box-shadow", "rgba(0, 0, 0, 0.3) 0px 2px 8px")

  var x = d3.scaleLinear().domain([-1.1,1.1]).range([0, width]);
  var y = d3.scaleLinear().domain([-3,3]).range([height, 0]);

  var valueline = d3.line()
      .x(function(d) { return x(d[0]); })
      .y(function(d) { return y(d[1]); });

  var colors = [colorbrewer.Dark2[3][0], colorbrewer.Dark2[3][1]]
  var path = svg.append("path")

  path.style("stroke-width", 2).style("stroke", colors[0]).attr("d", valueline(evalPoly(w)));

  function xvaltoiter(k) { return Math.floor(Math.pow(10,k)) }

  var svgDataEnter = svg.selectAll("scatter")
    .data(xv)
    .enter().append("g")

  // Allow the circles to be dragged and the polynomial fit to be changed in real time!
  svgDataEnter.append("circle")
      .on("mouseover", function () { this.parentNode.childNodes[1].setAttribute("opacity", 0.2)})
      .on("mouseout", function () { this.parentNode.childNodes[1].setAttribute("opacity", 0)})    
      .style("fill", function(d,i) { return "black" })
      .attr("r", 3)
      .attr("cx", function(d, i){ return x(xv[i]) })
      .attr("cy", function(d, i){return y(yv[i])})
      .attr("stroke","rgba(0,0,0,0.01)")
      .attr("stroke-width", 3)
      .call(d3.drag()
            .on("drag", function(d,i) {
              var ypos = d3.event.y 
              var yval = y.invert(ypos)
              this.setAttribute("cy", ypos)
              yv[i] = yval
              var b = numeric.dot(numeric.transpose(A), yv)
              iter = geniter(U, Lambda, b, 1/320)
              display_poly(iter(xvaltoiter(getState())))
              this.parentNode.childNodes[1].setAttribute("opacity", 1)
            })
            .on("end", function() {
              this.parentNode.childNodes[1].setAttribute("opacity", 0)
            })
          )

  svgDataEnter.append("line")
      .attr("x1", function(d,i) {return x(xv[i])})
      .attr("x2", function(d,i) {return x(xv[i])})
      .attr("y1", 0)
      .attr("y2", 200)
      .attr("stroke", "black")
      .attr("stroke-width", 2)
      .attr("opacity", 0)


  // Display polynomial fit on top (in green)
  var display_poly = function(w) {
    var data = evalPoly(w)
    path.attr("d", valueline(data));
  }

  // Display eigenvalues on bottom (in red)
  var display_eigen = function (n,i) {
    eigenpath.attr("class", "line")
      .transition()
      .duration(100)  
      .attr("d", valueline(evalPoly(numeric.mul(2/Math.pow(Lambda[i],0.5),U[i]) )))
      .style("opacity",1)
  }

  // callback when the slider is changed
  var sliderCallback = function(k, handle) { 
    var i = xvaltoiter(k)
    display_poly(iter(i))
    handle.select("text").text("k = " + Math.floor(i) ) 
  }

  var stepStoc  = getStepsConvergence(Lambda,1/200)
  var component = numeric.div(Ub, Lambda)
  var stepStoc  = stepStoc.map(Math.log10) 

  svg.append("g")     
    .attr("class", "grid")
    .attr("transform", "translate(0," + (height/2) + ")")
    .call(d3.axisTop(x)
        .ticks(6)
        .tickSize(2))

  svg.selectAll("g.tick").style("user-select","none").style("cursor","default")

  // Append Slider to div
  var getState = sliderGen([width, 60])
                  .ticks(stepStoc)
                  .change(sliderCallback)
                  .mouseover(display_eigen)
                  .tickConfig(1.5,5,true) 
                  .tooltip(function(d) { return  "λ<sub>"+(d+1)+"</sub> = " + round(Lambda[d]) + "<br>x<sub>" + (d+1) + "</sub><sup style=\"position:relative; left:-5px\">0</sup> = " + round(Ub[d]) })
                  .startxval(2)(divin).xval

  /*
   * Add eigenvalue plot at the bottom.
   * Some copy and pasted code here, but its only a 1-time thing.
   */

  var svg = divin
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("border", "black solid 1px")
      .style("box-shadow", "rgba(0, 0, 0, 0.3) 0px 2px 8px")

  var eigensvg = svg.attr("class", "line")
      .attr("d", valueline(evalPoly(w)))
      .append("svg")
        .attr("width", width)
        .attr("height", height)
        .style("border", "black solid 1px")
        .style("box-shadow", "rgba(0, 0, 0, 0.3) 0px 2px 8px")

  var eigenpath = eigensvg.append("path")
                  .style("stroke-width", "2px")
                  .style("stroke", colors[1])

  eigensvg.append("g")     
    .attr("class", "grid")
    .attr("transform", "translate(0," + (height/2) + ")")
    .call(d3.axisTop(x)
        .ticks(6)
        .tickSize(2))

  /*
   * Titles
   */ 
  divin
    .append("span")
    .style("position","absolute")
    .style("top", "207px")
    .style("left", "0px")
    .style("font-size", "12px")
    .style("text-align", "center")
    .html("Eigenvectors")

  divin
    .append("span")
    .style("position","absolute")
    .style("top", "-26px")
    .style("left", "0px")
    .style("font-size", "12px")
    .style("text-align", "center")
    .html("Polynomial with coefficients w<sub>i</sub>")

  // Start at some nice looking defaults.
  display_poly(w)
  display_eigen(10,20)

}
