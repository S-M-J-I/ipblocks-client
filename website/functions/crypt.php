<?php

function hashPassword($password)
{
    $randSalt = '$2a$07$ipblockchainprosalting';
    return crypt($password, $randSalt);
}
