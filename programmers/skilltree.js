function solution(skill, skill_trees) {
    let answer = 0;

    for (let items of skill_trees) {
        let comp = skill;
        console.log(comp, items);
        for (let i = 0; i < items.length; i++) {
            if (comp[0] === items[i]) { //선행스킬과 스킬이 같을때
                comp = comp.substr(1, comp.length);
                if (comp.length === 0) { //모든 선행스킬 사용시
                    answer++;
                    break;
                }
            } else { //선행스킬과 스킬이 같지 않을때
                let tmp = false;
                for (let j = 0; j < comp.length; j++) {
                    if (comp[j] === items[i]) {
                        tmp = true;
                        break;
                    }
                }
                if (tmp) {
                    break;
                }
            }
            if (i === items.length - 1) {
                answer++;
            }
        }
    }
    return answer;
}
console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
